const assert = require('node:assert/strict')
const test = require('node:test')
const rankings = require('./rankings.json')

function assertCompetitionRanks(entries, label) {
  for (let start = 0; start < entries.length;) {
    const rank = entries[start].rank
    assert.equal(rank, start + 1, `${label}: tied group at row ${start + 1}`)
    while (start < entries.length && entries[start].rank === rank) start += 1
  }
}

test('overall and country leaderboards use competition ranks after ties', () => {
  for (const [division, data] of Object.entries(rankings)) {
    assertCompetitionRanks(data.overall, `${division} overall`)
    for (const group of data.countries) {
      assertCompetitionRanks(group.entries, `${division} ${group.country}`)
    }
  }
})
