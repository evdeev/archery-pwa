export const SCORE_VALUES = {
  X: 10,
  '10': 10,
  '9': 9,
  '8': 8,
  '7': 7,
  '6': 6,
  '5': 5,
  '4': 4,
  '3': 3,
  '2': 2,
  '1': 1,
  M: 0
};

export function calculateSessionScore(session) {
  let total = 0;
  let xCount = 0;
  let tenCount = 0;

  for (const round of session.rounds) {
    for (const series of round.series) {
      for (const shot of series.shots) {
        if (!shot) {
          continue;
        }

        total += SCORE_VALUES[shot] ?? 0;

        if (shot === 'X') {
          xCount += 1;
        }

        if (shot === '10') {
          tenCount += 1;
        }
      }
    }
  }

  return {
    total,
    xCount,
    tenCount
  };
}
