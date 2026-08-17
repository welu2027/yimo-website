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
 *   MAIL_TO         - where inquiries are delivered.
 *   MAIL_FROM       - sender, on a domain verified in Resend.
 *   ALLOWED_ORIGIN  - site origin permitted to POST here.
 */

const MAX_FIELD = 200
const MAX_MESSAGE = 5000

function corsHeaders(env, request) {
  const allowed = (env.ALLOWED_ORIGIN || '').split(',').map((o) => o.trim()).filter(Boolean)
  const origin = request.headers.get('Origin') || ''
  // Echo the origin back only when it is one we recognise, so the browser
  // refuses cross-site posts from anywhere else.
  const allowOrigin = allowed.includes(origin) ? origin : allowed[0] || ''
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

// Header injection guard: a newline in the subject line would otherwise let a
// submitter append their own mail headers.
const clean = (v, max) => String(v || '').replace(/[\r\n]+/g, ' ').trim().slice(0, max)

const escapeHtml = (v) =>
  String(v).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ))

export default {
  async fetch(request, env) {
    const cors = corsHeaders(env, request)

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors })
    if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405, cors)

    let payload
    try {
      payload = await request.json()
    } catch {
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

    const name = `${firstName} ${lastName}`
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: env.MAIL_FROM,
        to: [env.MAIL_TO],
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
