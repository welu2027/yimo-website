import assert from 'node:assert/strict'
import test from 'node:test'

const cartId = '00000000-0000-4000-8000-000000000001'
const variantId = '00000000-0000-4000-8000-000000000002'

async function loadWorker() {
  try {
    return (await import('../src/index.mjs')).default
  } catch (error) {
    assert.fail(`Worker module is missing: ${error.code}`)
  }
}

const { formatPrice, normalizeProducts, availableVariants } = await import('../public/storefront.mjs').catch(() => ({}))

async function requestWorker(path, options = {}, upstreamFetch, token = 'storefront-test-token') {
  const savedFetch = globalThis.fetch
  globalThis.fetch = upstreamFetch

  try {
    const worker = await loadWorker()
    return await worker.fetch(
      new Request(`https://merch.yimo-official.org${path}`, options),
      { FOURTHWALL_STOREFRONT_API: token }
    )
  } finally {
    globalThis.fetch = savedFetch
  }
}

test('GET /api/shop forwards to Fourthwall with the server-side token', async () => {
  let upstreamUrl
  const response = await requestWorker('/api/shop', {}, async (input) => {
    upstreamUrl = new URL(input)
    return Response.json({
      name: 'Youth International Math Olympiad (YIMO)',
      publicDomain: 'youth-international-math-olympiad-yimo-zjv-shop.fourthwall.com'
    })
  })

  assert.equal(response.status, 200)
  assert.equal(upstreamUrl.origin, 'https://storefront-api.fourthwall.com')
  assert.equal(upstreamUrl.pathname, '/v1/shop')
  assert.equal(upstreamUrl.searchParams.get('storefront_token'), 'storefront-test-token')
  assert.equal((await response.json()).name, 'Youth International Math Olympiad (YIMO)')
})

test('GET /api/products requests only the public all-products collection', async () => {
  let upstreamUrl
  const response = await requestWorker('/api/products', {}, async (input) => {
    upstreamUrl = new URL(input)
    return Response.json({ results: [], paging: { hasNextPage: false } })
  })

  assert.equal(response.status, 200)
  assert.equal(upstreamUrl.pathname, '/v1/collections/all/products')
  assert.equal((await response.json()).results.length, 0)
})

test('POST /api/carts creates a Fourthwall cart in the requested currency', async () => {
  let upstreamUrl
  let upstreamBody
  const response = await requestWorker('/api/carts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ currency: 'USD' })
  }, async (input, init) => {
    upstreamUrl = new URL(input)
    upstreamBody = JSON.parse(init.body)
    return Response.json({ id: cartId, items: [] })
  })

  assert.equal(response.status, 200)
  assert.equal(upstreamUrl.pathname, '/v1/carts')
  assert.equal(upstreamBody.currency, 'USD')
  assert.equal((await response.json()).id, cartId)
})

test('POST /api/carts/:id/add forwards a variant and quantity', async () => {
  let upstreamUrl
  let upstreamBody
  const response = await requestWorker(`/api/carts/${cartId}/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items: [{ variantId, quantity: 2 }] })
  }, async (input, init) => {
    upstreamUrl = new URL(input)
    upstreamBody = JSON.parse(init.body)
    return Response.json({ id: cartId, items: [{ variant: { id: variantId }, quantity: 2 }] })
  })

  assert.equal(response.status, 200)
  assert.equal(upstreamUrl.pathname, `/v1/carts/${cartId}/add`)
  assert.deepEqual(upstreamBody.items, [{ variantId, quantity: 2 }])
})

test('cart mutation endpoints reject methods other than POST', async () => {
  let called = false
  const response = await requestWorker(`/api/carts/${cartId}/add`, {}, async () => {
    called = true
    return Response.json({})
  })

  assert.equal(response.status, 405)
  assert.equal(called, false)
})

test('unknown API routes are rejected without an upstream request', async () => {
  let called = false
  const response = await requestWorker('/api/proxy?url=https://example.com', {}, async () => {
    called = true
    return Response.json({})
  })

  assert.equal(response.status, 404)
  assert.equal(called, false)
})

test('invalid cart quantities are rejected before contacting Fourthwall', async () => {
  let called = false
  const response = await requestWorker(`/api/carts/${cartId}/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items: [{ variantId, quantity: 0 }] })
  }, async () => {
    called = true
    return Response.json({})
  })

  assert.equal(response.status, 400)
  assert.equal(called, false)
})

test('malformed cart JSON is rejected before contacting Fourthwall', async () => {
  let called = false
  const response = await requestWorker('/api/carts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{'
  }, async () => {
    called = true
    return Response.json({})
  })

  assert.equal(response.status, 400)
  assert.deepEqual(await response.json(), { error: 'INVALID_JSON' })
  assert.equal(called, false)
})

test('invalid cart IDs are rejected before contacting Fourthwall', async () => {
  let called = false
  const response = await requestWorker('/api/carts/not-a-uuid', {}, async () => {
    called = true
    return Response.json({})
  })

  assert.equal(response.status, 404)
  assert.equal(called, false)
})

test('an expired cart is reported with a safe CART_NOT_FOUND code', async () => {
  const response = await requestWorker(`/api/carts/${cartId}`, {}, async () => (
    Response.json({ code: 'CART_NOT_FOUND', cartId, message: 'internal upstream detail' }, { status: 404 })
  ))

  assert.equal(response.status, 404)
  assert.deepEqual(await response.json(), { error: 'CART_NOT_FOUND' })
})

test('upstream failures do not leak response bodies or the Storefront token', async () => {
  const response = await requestWorker('/api/shop', {}, async () => (
    Response.json({ error: 'unauthorized storefront-test-token' }, { status: 401 })
  ))
  const body = await response.text()

  assert.equal(response.status, 502)
  assert.equal(body.includes('storefront-test-token'), false)
  assert.equal(body.includes('unauthorized'), false)
})

test('same-origin redirects may be followed but cross-origin redirects are blocked', async () => {
  const urls = []
  const sameOrigin = await requestWorker('/api/shop', {}, async (input) => {
    urls.push(new URL(input))
    return urls.length === 1
      ? new Response(null, { status: 302, headers: { Location: '/v1/shop/' } })
      : Response.json({ name: 'YIMO' })
  })
  assert.equal(sameOrigin.status, 200)
  assert.equal(urls[1].origin, 'https://storefront-api.fourthwall.com')
  assert.equal(urls[1].searchParams.get('storefront_token'), 'storefront-test-token')

  let calls = 0
  const crossOrigin = await requestWorker('/api/shop', {}, async () => {
    calls += 1
    return new Response(null, { status: 302, headers: { Location: 'https://attacker.example/collect' } })
  })
  assert.equal(crossOrigin.status, 502)
  assert.equal(calls, 1)
})

test('requests fail safely when the Storefront token is not configured', async () => {
  let called = false
  const response = await requestWorker('/api/shop', {}, async () => {
    called = true
    return Response.json({})
  }, '')

  assert.equal(response.status, 503)
  assert.equal(called, false)
})

test('prices use the product currency and amount', () => {
  assert.equal(formatPrice({ value: 24.5, currency: 'USD' }), new Intl.NumberFormat(undefined, {
    style: 'currency', currency: 'USD'
  }).format(24.5))
})

test('only purchasable variants are offered', () => {
  assert.deepEqual(availableVariants({ variants: [
    { id: variantId, name: 'Medium', state: { type: 'AVAILABLE' } },
    { id: cartId, name: 'Large', state: { type: 'SOLD_OUT' } }
  ] }).map((variant) => variant.id), [variantId])
})

test('catalog normalization keeps usable products and handles empty or malformed data', () => {
  const products = normalizeProducts({ results: [
    { id: cartId, type: 'PRODUCT', name: 'YIMO tee', variants: [{ id: variantId, unitPrice: { value: 20, currency: 'USD' } }] },
    { id: variantId, type: 'PRODUCT', name: 'No variants', variants: [] },
    null
  ] })

  assert.equal(products.length, 1)
  assert.equal(normalizeProducts({ results: [] }).length, 0)
  assert.deepEqual(normalizeProducts({ results: 'unexpected' }), [])
})
