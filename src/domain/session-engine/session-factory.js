export function createEmptySession({ id = crypto.randomUUID(), date = new Date().toISOString(), distanceMeters = 18, totalShots = 60 } = {}) {
  const roundsCount = totalShots / 30;

  return {
    id,
    date,
    type: 'training',
    distanceMeters,
    target: 'default',
    arrowsPerSeries: 3,
    totalShots,
    rounds: Array.from({ length: roundsCount }, (_, roundIndex) => ({
      id: crypto.randomUUID(),
      number: roundIndex + 1,
      series: Array.from({ length: 10 }, (_, seriesIndex) => ({
        id: crypto.randomUUID(),
        number: seriesIndex + 1,
        shots: Array.from({ length: 3 }, () => null),
        comment: ''
      }))
    })),
    totalScore: 0,
    possibleScore: totalShots * 10,
    xCount: 0,
    tenCount: 0,
    note: ''
  };
}
