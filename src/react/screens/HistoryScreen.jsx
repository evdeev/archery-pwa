import { SessionCard } from '../components/SessionCard.jsx';

export function HistoryScreen() {
  return (
    <section className="history-screen">
      <h2>Май 2026</h2>

      <div className="session-list">
        <SessionCard />
      </div>
    </section>
  );
}
