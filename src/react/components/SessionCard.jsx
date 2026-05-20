export function SessionCard({ date, score, possibleScore }) {
  return (
    <article className="session-card">
      <div>
        <div className="session-date">{date}</div>
        <div className="session-meta">18 м · Тренировка</div>
      </div>

      <div className="session-score">
        <strong>{score}</strong>
        <span>/{possibleScore}</span>
      </div>
    </article>
  );
}
