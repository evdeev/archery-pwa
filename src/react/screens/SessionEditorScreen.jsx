import { useState } from 'react';

import { ScoreKeyboard } from '../components/score-keyboard/ScoreKeyboard.jsx';

import { useSessionStore } from '../../store/useSessionStore.js';

export function SessionEditorScreen() {
  const session = useSessionStore(state => state.currentSession);
  const setShot = useSessionStore(state => state.setShot);

  const [selected, setSelected] = useState({
    roundIndex: 0,
    seriesIndex: 0,
    shotIndex: 0
  });

  function handleScore(value) {
    setShot(
      selected.roundIndex,
      selected.seriesIndex,
      selected.shotIndex,
      value
    );
  }

  return (
    <section className="session-editor-screen" aria-labelledby="session-editor-title">
      <header className="session-summary-card">
        <div>
          <h2 id="session-editor-title">18 м</h2>
          <p>{session.xCount}X · {session.tenCount}10</p>
        </div>

        <div className="session-total-score">
          <strong>{session.totalScore}</strong>
          <span>/{session.possibleScore}</span>
        </div>
      </header>

      {session.rounds.map((round, roundIndex) => (
        <div key={round.id} className="session-round-card">
          <header className="session-round-header">
            <span>Раунд {round.number}</span>
          </header>

          <div className="series-list">
            {round.series.map((series, seriesIndex) => (
              <div key={series.id} className="series-row">
                <span className="series-number">{series.number}</span>

                {series.shots.map((shot, shotIndex) => {
                  const active =
                    selected.roundIndex === roundIndex &&
                    selected.seriesIndex === seriesIndex &&
                    selected.shotIndex === shotIndex;

                  return (
                    <button
                      key={shotIndex}
                      type="button"
                      className={`shot-cell ${active ? 'active' : ''}`}
                      onClick={() => {
                        setSelected({
                          roundIndex,
                          seriesIndex,
                          shotIndex
                        });
                      }}
                    >
                      {shot ?? '—'}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      ))}

      <ScoreKeyboard onScore={handleScore} />
    </section>
  );
}
