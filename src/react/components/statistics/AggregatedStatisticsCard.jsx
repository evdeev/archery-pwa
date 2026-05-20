export function AggregatedStatisticsCard({ statistics }) {
  return (
    <article className="statistics-summary-card">
      <div>
        <span>Средний</span>
        <strong>{statistics.averageScore}</strong>
      </div>

      <div>
        <span>Лучший</span>
        <strong>{statistics.bestScore}</strong>
      </div>

      <div>
        <span>Сессии</span>
        <strong>{statistics.totalSessions}</strong>
      </div>
    </article>
  );
}
