/**
 * YIMO contact form endpoint.
 *
 * The website itself is statically generated and deployed to GitHub Pages,
 * which cannot run server code, so the Resend API key has nowhere safe to
 * live there — anything in the site bundle is readable by every visitor.
 * This Worker is that missing server: it holds the key as a Cloudflare secret
 * and is the only thing that ever talks to Resend.
 *
 * Secrets/vars (set with `npx wrangler secret put` / in wrangler.jsonc):
 *   RESEND_API_KEY  - secret. The Resend key.
 *   MAIL_TO         - where inquiries are delivered (comma-separated for
 *                     multiple recipients).
 *   MAIL_FROM       - sender, on a domain verified in Resend.
 *   ALLOWED_ORIGIN  - site origin permitted to POST here.
 *   CONTACT_IP_LIMITER    - Wrangler rate-limit binding, 5 requests/minute.
 *   CONTACT_EMAIL_LIMITER - Wrangler rate-limit binding, 3 requests/minute.
 */

const MAX_FIELD = 200
const MAX_MESSAGE = 5000
const MAX_BODY_BYTES = 32 * 1024

function allowedOrigins(env) {
  return (env.ALLOWED_ORIGIN || '').split(',').map((o) => o.trim()).filter(Boolean)
}

function corsHeaders(env, request) {
  const allowed = allowedOrigins(env)
  const origin = request.headers.get('Origin') || ''
  // Echo the origin back only when it is one we recognise, so the browser
  // refuses cross-site posts from anywhere else.
  const allowOrigin = allowed.includes(origin) ? origin : ''
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  }
}

function json(body, status, headers) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...headers },
  })
}

async function checkRateLimit(limiter, key) {
  if (!limiter || typeof limiter.limit !== 'function') return 'unavailable'

  try {
    const result = await limiter.limit({ key })
    if (typeof result?.success !== 'boolean') return 'unavailable'
    return result.success ? 'allowed' : 'limited'
  } catch (error) {
    console.error('Contact rate limiter error', error)
    return 'unavailable'
  }
}

function clientIp(request) {
  return request.headers.get('CF-Connecting-IP') || 'unknown'
}

async function digest(value) {
  const bytes = new TextEncoder().encode(value)
  const hash = await crypto.subtle.digest('SHA-256', bytes)
  return Array.from(new Uint8Array(hash), (byte) => byte.toString(16).padStart(2, '0')).join('')
}

// Header injection guard: a newline in the subject line would otherwise let a
// submitter append their own mail headers.
const clean = (v, max) => String(v || '').replace(/[\r\n]+/g, ' ').trim().slice(0, max)

const escapeHtml = (v) =>
  String(v).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ))

export default {
  async fetch(request, env) {
    const allowed = allowedOrigins(env)
    const cors = corsHeaders(env, request)
    const origin = request.headers.get('Origin') || ''

    if (request.method === 'OPTIONS') {
      if (!allowed.includes(origin)) return json({ error: 'Origin not allowed.' }, 403, cors)
      return new Response(null, { status: 204, headers: cors })
    }
    if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405, cors)
    if (!allowed.includes(origin)) return json({ error: 'Origin not allowed.' }, 403, cors)

    const ipLimit = await checkRateLimit(env.CONTACT_IP_LIMITER, `ip:${clientIp(request)}`)
    if (ipLimit === 'limited') return json({ error: 'Too many requests. Please try again later.' }, 429, cors)
    if (ipLimit === 'unavailable') return json({ error: 'Contact service unavailable.' }, 503, cors)

    const contentLength = request.headers.get('Content-Length')
    if (contentLength && (!/^\d+$/.test(contentLength) || Number(contentLength) > MAX_BODY_BYTES)) {
      return json({ error: 'Request body is too large.' }, 413, cors)
    }

    let payload
    try {
      const rawBody = await request.text()
      if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
        return json({ error: 'Request body is too large.' }, 413, cors)
      }
      payload = JSON.parse(rawBody)
    } catch {
      return json({ error: 'Invalid request body.' }, 400, cors)
    }

    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
      return json({ error: 'Invalid request body.' }, 400, cors)
    }

    // Bots fill in every field they find; humans never see this one.
    if (payload.company) return json({ ok: true }, 200, cors)

    const firstName = clean(payload.firstName, MAX_FIELD)
    const lastName = clean(payload.lastName, MAX_FIELD)
    const email = clean(payload.email, MAX_FIELD)
    const message = String(payload.message || '').trim().slice(0, MAX_MESSAGE)

    if (!firstName || !lastName || !email) {
      return json({ error: 'First name, last name, and email are required.' }, 400, cors)
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ error: 'Please enter a valid email address.' }, 400, cors)
    }

    const emailLimit = await checkRateLimit(env.CONTACT_EMAIL_LIMITER, `email:${await digest(email.toLowerCase())}`)
    if (emailLimit === 'limited') return json({ error: 'Too many requests. Please try again later.' }, 429, cors)
    if (emailLimit === 'unavailable') return json({ error: 'Contact service unavailable.' }, 503, cors)
    if (!env.RESEND_API_KEY || !env.MAIL_FROM || !env.MAIL_TO) {
      return json({ error: 'Contact service unavailable.' }, 503, cors)
    }

    const name = `${firstName} ${lastName}`
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: env.MAIL_FROM,
        to: env.MAIL_TO.split(',').map((a) => a.trim()).filter(Boolean),
        // So hitting reply in the inbox goes to the person who wrote in,
        // rather than back to the Worker's sending address.
        reply_to: email,
        subject: `YIMO business inquiry from ${name}`,
        html: `
          <h2>New YIMO business inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br>') || '<em>(no message)</em>'}</p>
        `,
      }),
    })

    if (!res.ok) {
      // Resend's own error text can name the account or key, so it is logged
      // for the operator and never returned to the browser.
      console.error('Resend error', res.status, await res.text())
      return json({ error: 'Could not send right now. Please email us directly.' }, 502, cors)
    }

    return json({ ok: true }, 200, cors)
  },
}
