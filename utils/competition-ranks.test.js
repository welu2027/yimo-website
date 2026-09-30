const assert = require('node:assert/strict')
const test = require('node:test')

test('competition ranks skip places occupied by ties', async () => {
  const { competitionRanks } = await import('./competition-ranks.mjs')

  assert.deepEqual(competitionRanks([20, 20, 17, 17, 16]), [1, 1, 3, 3, 5])
  assert.deepEqual(competitionRanks([9, 7, 7, 6]), [1, 2, 2, 4])
})

test('places use correct ordinals and medal colors', async () => {
  const { ordinalRank, medalClass } = await import('./competition-ranks.mjs')

  assert.deepEqual([1, 2, 3, 4, 11, 12, 21].map(ordinalRank), [
    '1st', '2nd', '3rd', '4th', '11th', '12th', '21st'
  ])
  assert.deepEqual([1, 2, 3, 4].map(medalClass), [
    'rank-gold', 'rank-silver', 'rank-bronze', ''
  ])
})

test('scores are visible only through third place', async () => {
  const { showsScore } = await import('./competition-ranks.mjs')

  assert.deepEqual([1, 2, 3, 4, 5].map(showsScore), [true, true, true, false, false])
})
