import { useNavigate } from 'react-router-dom';

import { SessionCard } from '../SessionCard.jsx';

export function HistorySessionList({ sessions }) {
  const navigate = useNavigate();

  return (
    <div className="session-list">
      {sessions.map(session => (
        <button
          key={session.id}
          type="button"
          className="session-list-button"
          onClick={() => navigate(`/session?id=${session.id}`)}
        >
          <SessionCard
            date={new Date(session.date).toLocaleDateString()}
            score={session.totalScore}
            possibleScore={session.possibleScore}
          />
        </button>
      ))}
    </div>
  );
}
