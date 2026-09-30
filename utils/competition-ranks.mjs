export function competitionRanks(scores) {
  let previousScore
  let rank = 0

  return scores.map((score, index) => {
    if (index === 0 || score !== previousScore) rank = index + 1
    previousScore = score
    return rank
  })
}

export function ordinalRank(rank) {
  const lastTwo = rank % 100
  const suffix = lastTwo >= 11 && lastTwo <= 13
    ? 'th'
    : ({ 1: 'st', 2: 'nd', 3: 'rd' }[rank % 10] || 'th')
  return `${rank}${suffix}`
}

export function medalClass(rank) {
  return ({ 1: 'rank-gold', 2: 'rank-silver', 3: 'rank-bronze' }[rank] || '')
}
