export function filterSessionsByPeriod(sessions, period) {
  const now = new Date();

  return sessions.filter(session => {
    const date = new Date(session.date);
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

    switch (period) {
      case 'week':
        return diffDays <= 7;

      case 'month':
        return diffDays <= 31;

      case 'quarter':
        return diffDays <= 93;

      case 'year':
        return diffDays <= 365;

      default:
        return true;
    }
  });
}
