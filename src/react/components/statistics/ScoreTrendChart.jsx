export function ScoreTrendChart({ sessions }) {
  const maxScore = Math.max(...sessions.map(session => session.totalScore), 1);

  return (
    <div className="score-trend-chart">
      {sessions.map(session => {
        const height = Math.max(12, (session.totalScore / maxScore) * 160);

        return (
          <div key={session.id} className="score-trend-column">
            <div
              className="score-trend-bar"
              style={{ height: `${height}px` }}
            />

            <span>
              {new Date(session.date).toLocaleDateString('ru-RU', {
                day: 'numeric',
                month: 'short'
              })}
            </span>
          </div>
        );
      })}
    </div>
  );
}
