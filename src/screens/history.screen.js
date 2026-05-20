import { SessionCard } from '../components/session-card/session-card.js';

export function HistoryScreen() {
  return `
    <section class="history-screen">
      <h2>Май 2026</h2>

      <div class="session-list">
        ${SessionCard()}
      </div>
    </section>
  `;
}
