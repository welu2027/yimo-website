import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const root = new URL('../', import.meta.url)
const config = readFileSync(new URL('nuxt.config.js', root), 'utf8')

test('YIMO preview images are valid 1200x627 PNGs and the main card uses the official domain', () => {
  assert.match(config, /ogHost:\s*'https:\/\/yimo-official\.org'/)
  assert.match(config, /path:\s*'\/og\/yimo-main\.png'/)
  assert.match(config, /width:\s*'1200'/)
  assert.match(config, /height:\s*'627'/)

  for (const imageName of ['yimo-main.png', 'graphwar.png']) {
    const image = readFileSync(new URL(`static/og/${imageName}`, root))
    assert.deepEqual(image.subarray(0, 8), Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
    assert.equal(image.readUInt32BE(16), 1200)
    assert.equal(image.readUInt32BE(20), 627)
  }
})
