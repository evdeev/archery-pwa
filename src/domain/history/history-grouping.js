export function groupSessionsByMonth(sessions) {
  return sessions.reduce((groups, session) => {
    const date = new Date(session.date);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    const title = date.toLocaleDateString('ru-RU', {
      month: 'long',
      year: 'numeric'
    });

    if (!groups[key]) {
      groups[key] = {
        key,
        title: title.charAt(0).toUpperCase() + title.slice(1),
        sessions: []
      };
    }

    groups[key].sessions.push(session);

    return groups;
  }, {});
}

export function toMonthGroups(sessions) {
  return Object.values(groupSessionsByMonth(sessions)).sort((a, b) => {
    return b.key.localeCompare(a.key);
  });
}
