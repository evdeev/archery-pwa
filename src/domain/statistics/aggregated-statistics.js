export function aggregateStatistics(sessions) {
  if (!sessions.length) {
    return {
      averageScore: 0,
      bestScore: 0,
      totalSessions: 0
    };
  }

  const totalScore = sessions.reduce((sum, session) => {
    return sum + session.totalScore;
  }, 0);

  return {
    averageScore: Math.round(totalScore / sessions.length),
    bestScore: Math.max(...sessions.map(session => session.totalScore)),
    totalSessions: sessions.length
  };
}
