import { useSessionStore } from '../../store/useSessionStore.js';

import { SessionCard } from '../components/SessionCard.jsx';
import { CreateSessionButton } from '../components/session/CreateSessionButton.jsx';

export function HistoryScreen() {
  const session = useSessionStore(state => state.currentSession);

  return (
    <section className="history-screen">
      <h2>Май 2026</h2>

      <div className="session-list">
        <SessionCard
          date={new Date(session.date).toLocaleDateString()}
          score={session.totalScore}
          possibleScore={session.possibleScore}
        />
      </div>

      <CreateSessionButton />
    </section>
  );
}
