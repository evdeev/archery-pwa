export function calculateSessionTotals(rounds) {
  let total = 0;

  for (const round of rounds) {
    for (const series of round.series) {
      for (const shot of series.shots) {
        total += shot.score;
      }
    }
  }

  return total;
}
