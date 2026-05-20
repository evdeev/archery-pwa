import { useState } from 'react';

import { toMonthGroups } from '../../domain/history/history-grouping.js';
import { useSessionHistory } from '../hooks/useSessionHistory.js';

import { CreateSessionButton } from '../components/session/CreateSessionButton.jsx';
import { EmptyState } from '../components/feedback/EmptyState.jsx';
import { HistoryFilters } from '../components/history/HistoryFilters.jsx';
import { HistorySessionList } from '../components/history/HistorySessionList.jsx';
import { LoadingState } from '../components/feedback/LoadingState.jsx';

export function HistoryScreen() {
  const { sessions, loading } = useSessionHistory();
  const [filter, setFilter] = useState('all');

  const filteredSessions = sessions.filter(session => {
    if (filter === 'all') {
      return true;
    }

    return session.type === filter;
  });

  const monthGroups = toMonthGroups(filteredSessions);

  if (loading) {
    return <LoadingState />;
  }

  return (
    <section className="history-screen">
      <HistoryFilters active={filter} onChange={setFilter} />

      {monthGroups.length === 0 && (
        <EmptyState
          title="История пуста"
          description="Создайте первую тренировку, чтобы начать вести журнал."
        />
      )}

      {monthGroups.map(group => (
        <section key={group.key} className="history-month-group">
          <h2>{group.title}</h2>
          <HistorySessionList sessions={group.sessions} />
        </section>
      ))}

      <CreateSessionButton />
    </section>
  );
}
