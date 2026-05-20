export function calculateAverageScore(sessions) {
  if (!sessions.length) {
    return 0;
  }

  const total = sessions.reduce((sum, session) => {
    return sum + session.totalScore;
  }, 0);

  return Math.round(total / sessions.length);
}

export function buildScoreTrend(sessions) {
  return sessions.map(session => ({
    date: session.date,
    average: session.totalScore
  }));
}
