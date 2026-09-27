const INLINE_ASSETS = null
const FOURTHWALL_API = 'https://storefront-api.fourthwall.com/v1'
const ASSET_TYPES = { '/': 'text/html; charset=utf-8', '/index.html': 'text/html; charset=utf-8', '/styles.css': 'text/css; charset=utf-8', '/storefront.mjs': 'text/javascript; charset=utf-8', '/yimo-logo-gold-small.png': 'image/png' }
const MAX_BODY_BYTES = 32 * 1024
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
const CURRENCIES = new Set(['USD', 'EUR', 'CAD', 'GBP', 'AUD', 'NZD', 'SEK', 'NOK', 'DKK', 'PLN', 'INR', 'JPY', 'MYR', 'SGD', 'MXN', 'BRL', 'CHF'])

function json(body, status = 200) {
  return Response.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' }
  })
}

function error(status, code) {
  return json({ error: code }, status)
}

async function parseBody(request) {
  const contentType = request.headers.get('content-type') || ''
  if (!contentType.toLowerCase().includes('application/json')) {
    throw Object.assign(new Error('JSON body required'), { status: 415, code: 'JSON_REQUIRED' })
  }

  const contentLength = request.headers.get('content-length')
  if (contentLength && (!/^\d+$/.test(contentLength) || Number(contentLength) > MAX_BODY_BYTES)) {
    throw Object.assign(new Error('Request body too large'), { status: 413, code: 'BODY_TOO_LARGE' })
  }

  const text = await request.text()
  if (new TextEncoder().encode(text).byteLength > MAX_BODY_BYTES) {
    throw Object.assign(new Error('Request body too large'), { status: 413, code: 'BODY_TOO_LARGE' })
  }

  let value
  try {
    value = JSON.parse(text)
  } catch {
    throw Object.assign(new Error('Invalid JSON'), { status: 400, code: 'INVALID_JSON' })
  }
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw Object.assign(new Error('JSON object required'), { status: 400, code: 'INVALID_BODY' })
  }
  return value
}

function cartItems(value) {
  if (!Array.isArray(value.items) || value.items.length === 0 || value.items.length > 20) {
    throw Object.assign(new Error('Invalid cart items'), { status: 400, code: 'INVALID_ITEMS' })
  }

  return value.items.map((item) => {
    if (!item || typeof item !== 'object' || !UUID.test(String(item.variantId || ''))) {
      throw Object.assign(new Error('Invalid variant'), { status: 400, code: 'INVALID_VARIANT' })
    }
    if (!Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > 99) {
      throw Object.assign(new Error('Invalid quantity'), { status: 400, code: 'INVALID_QUANTITY' })
    }

    const result = { variantId: item.variantId, quantity: item.quantity }
    if (item.bundleId !== undefined) {
      if (!UUID.test(String(item.bundleId))) {
        throw Object.assign(new Error('Invalid bundle'), { status: 400, code: 'INVALID_BUNDLE' })
      }
      result.bundleId = item.bundleId
    }
    return result
  })
}

async function fourthwall(request, env, path, body) {
  const token = String(env?.FOURTHWALL_STOREFRONT_API || '').trim()
  if (!token) return error(503, 'STOREFRONT_UNAVAILABLE')

  const url = new URL(`${FOURTHWALL_API}${path}`)
  url.searchParams.set('storefront_token', token)
  const init = { method: request.method, redirect: 'manual' }
  if (body !== undefined) {
    init.headers = { 'Content-Type': 'application/json' }
    init.body = JSON.stringify(body)
  }

  let response
  try {
    response = await fetch(url, init)
    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get('location')
      const target = location && new URL(location, url)
      if (!target || target.origin !== url.origin) return error(502, 'FOURTHWALL_UNAVAILABLE')
      target.searchParams.set('storefront_token', token)
      response = await fetch(target, { ...init, redirect: 'error' })
    }
  } catch {
    return error(502, 'FOURTHWALL_UNAVAILABLE')
  }

  let payload
  try {
    payload = await response.json()
  } catch {
    return error(502, 'FOURTHWALL_UNAVAILABLE')
  }

  if (!response.ok) {
    if (response.status === 404 && payload?.code === 'CART_NOT_FOUND') {
      return error(404, 'CART_NOT_FOUND')
    }
    if (response.status === 429) return error(429, 'FOURTHWALL_RATE_LIMITED')
    return error(502, 'FOURTHWALL_UNAVAILABLE')
  }

  return json(payload)
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const { pathname } = url

    if (['GET', 'HEAD'].includes(request.method) && INLINE_ASSETS?.[pathname]) {
      const asset = INLINE_ASSETS[pathname]
      const body = pathname.endsWith('.png')
        ? Uint8Array.from(atob(asset), (character) => character.charCodeAt(0))
        : asset
      return new Response(body, {
        headers: { 'Content-Type': ASSET_TYPES[pathname], 'Cache-Control': 'public, max-age=300' }
      })
    }

    if (pathname === '/api/shop' || pathname === '/api/products') {
      if (request.method !== 'GET') return error(405, 'METHOD_NOT_ALLOWED')
      const path = pathname === '/api/shop'
        ? '/shop'
        : '/collections/all/products?page=0&size=50'
      return fourthwall(request, env, path)
    }

    if (pathname === '/api/carts') {
      if (request.method !== 'POST') return error(405, 'METHOD_NOT_ALLOWED')
      try {
        const value = await parseBody(request)
        const currency = value.currency === undefined ? 'USD' : value.currency
        if (!CURRENCIES.has(currency)) return error(400, 'INVALID_CURRENCY')
        return fourthwall(request, env, '/carts', { currency })
      } catch (cause) {
        return error(cause.status || 400, cause.code || 'INVALID_BODY')
      }
    }

    const cartRoute = pathname.match(/^\/api\/carts\/([0-9a-f-]{36})(?:\/(add|change|remove))?$/i)
    if (!cartRoute || !UUID.test(cartRoute[1])) return error(404, 'NOT_FOUND')

    const [, cartId, operation] = cartRoute
    if (!operation) {
      if (request.method !== 'GET') return error(405, 'METHOD_NOT_ALLOWED')
      return fourthwall(request, env, `/carts/${cartId}`)
    }
    if (request.method !== 'POST') return error(405, 'METHOD_NOT_ALLOWED')

    try {
      const value = await parseBody(request)
      const items = cartItems(value)
      return fourthwall(request, env, `/carts/${cartId}/${operation}`, { items })
    } catch (cause) {
      return error(cause.status || 400, cause.code || 'INVALID_BODY')
    }
  }
}
