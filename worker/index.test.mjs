import assert from 'node:assert/strict'
import test from 'node:test'

import worker from './index.js'

test('rejects contact submissions without an allowed origin', async () => {
  const response = await worker.fetch(
    new Request('https://contact.example/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: 'Ada',
        lastName: 'Lovelace',
        email: 'ada@example.com',
        message: 'Hello',
      }),
    }),
    {
      ALLOWED_ORIGIN: 'https://www.yimo-official.org',
      MAIL_TO: 'team@yimo-official.org',
      MAIL_FROM: 'YIMO <noreply@yimo-official.org>',
      RESEND_API_KEY: 'test-key',
    },
  )

  assert.equal(response.status, 403)
  assert.deepEqual(await response.json(), { error: 'Origin not allowed.' })
})

test('rejects contact submissions when the IP rate limit is exceeded', async () => {
  const originalFetch = globalThis.fetch
  let resendCalls = 0
  globalThis.fetch = async () => {
    resendCalls += 1
    return new Response('{}', { status: 200 })
  }

  try {
    const response = await worker.fetch(
      new Request('https://contact.example/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Origin: 'https://www.yimo-official.org',
        },
        body: JSON.stringify({
          firstName: 'Ada',
          lastName: 'Lovelace',
          email: 'ada@example.com',
          message: 'Hello',
        }),
      }),
      {
        ALLOWED_ORIGIN: 'https://www.yimo-official.org',
        CONTACT_IP_LIMITER: { limit: async () => ({ success: false }) },
        MAIL_TO: 'team@yimo-official.org',
        MAIL_FROM: 'YIMO <noreply@yimo-official.org>',
        RESEND_API_KEY: 'test-key',
      },
    )

    assert.equal(response.status, 429)
    assert.deepEqual(await response.json(), { error: 'Too many requests. Please try again later.' })
    assert.equal(resendCalls, 0)
  } finally {
    globalThis.fetch = originalFetch
  }
})

test('rejects contact submissions when the email rate limit is exceeded', async () => {
  const originalFetch = globalThis.fetch
  let resendCalls = 0
  globalThis.fetch = async () => {
    resendCalls += 1
    return new Response('{}', { status: 200 })
  }

  try {
    const response = await worker.fetch(
      new Request('https://contact.example/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Origin: 'https://www.yimo-official.org',
          'CF-Connecting-IP': '203.0.113.5',
        },
        body: JSON.stringify({
          firstName: 'Ada',
          lastName: 'Lovelace',
          email: 'ada@example.com',
          message: 'Hello',
        }),
      }),
      {
        ALLOWED_ORIGIN: 'https://www.yimo-official.org',
        CONTACT_IP_LIMITER: { limit: async () => ({ success: true }) },
        CONTACT_EMAIL_LIMITER: { limit: async () => ({ success: false }) },
        MAIL_TO: 'team@yimo-official.org',
        MAIL_FROM: 'YIMO <noreply@yimo-official.org>',
        RESEND_API_KEY: 'test-key',
      },
    )

    assert.equal(response.status, 429)
    assert.deepEqual(await response.json(), { error: 'Too many requests. Please try again later.' })
    assert.equal(resendCalls, 0)
  } finally {
    globalThis.fetch = originalFetch
  }
})

test('sends an allowed contact submission through Resend once', async () => {
  const originalFetch = globalThis.fetch
  const resendRequests = []
  globalThis.fetch = async (input, init) => {
    resendRequests.push({ input, init })
    return new Response('{}', { status: 200 })
  }

  try {
    const response = await worker.fetch(
      new Request('https://contact.example/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Origin: 'https://www.yimo-official.org',
          'CF-Connecting-IP': '203.0.113.5',
        },
        body: JSON.stringify({
          firstName: 'Ada',
          lastName: 'Lovelace',
          email: 'ada@example.com',
          message: 'Hello',
        }),
      }),
      {
        ALLOWED_ORIGIN: 'https://www.yimo-official.org',
        CONTACT_IP_LIMITER: { limit: async () => ({ success: true }) },
        CONTACT_EMAIL_LIMITER: { limit: async () => ({ success: true }) },
        MAIL_TO: 'team@yimo-official.org',
        MAIL_FROM: 'YIMO <noreply@yimo-official.org>',
        RESEND_API_KEY: 'test-key',
      },
    )

    assert.equal(response.status, 200)
    assert.deepEqual(await response.json(), { ok: true })
    assert.equal(resendRequests.length, 1)
    assert.equal(resendRequests[0].input, 'https://api.resend.com/emails')
  } finally {
    globalThis.fetch = originalFetch
  }
})
