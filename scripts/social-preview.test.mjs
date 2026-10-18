import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const root = new URL('../', import.meta.url)
const config = readFileSync(new URL('nuxt.config.js', root), 'utf8')

test('YIMO preview images are valid PNGs and the main card uses the official domain', () => {
  assert.match(config, /ogHost:\s*'https:\/\/yimo-official\.org'/)
  assert.match(config, /path:\s*'\/og\/yimo-main-2x\.png'/)
  assert.match(config, /width:\s*'2400'/)
  assert.match(config, /height:\s*'1254'/)

  for (const [imageName, width, height] of [
    ['yimo-main-2x.png', 2400, 1254],
    ['graphwar.png', 1200, 627]
  ]) {
    const image = readFileSync(new URL(`static/og/${imageName}`, root))
    assert.deepEqual(image.subarray(0, 8), Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
    assert.equal(image.readUInt32BE(16), width)
    assert.equal(image.readUInt32BE(20), height)
  }
})
