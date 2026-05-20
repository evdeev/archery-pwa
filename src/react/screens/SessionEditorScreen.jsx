import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { IndexedDbSessionRepository } from '../../services/repositories/indexeddb-session.repository.js';
import { useSessionStore } from '../../store/useSessionStore.js';

import { ScoreKeyboard } from '../components/score-keyboard/ScoreKeyboard.jsx';
import { SeriesComment } from '../components/session/SeriesComment.jsx';

const repository = new IndexedDbSessionRepository();

export function SessionEditorScreen() {
  const [searchParams] = useSearchParams();

  const session = useSessionStore(state => state.currentSession);
  const selected = useSessionStore(state => state.selectedShot);
  const setSelectedShot = useSessionStore(state => state.setSelectedShot);
  const setShot = useSessionStore(state => state.setShot);
  const setCurrentSession = useSessionStore(state => state.setCurrentSession);
  const setSeriesComment = useSessionStore(state => state.setSeriesComment);

  useEffect(() => {
    async function loadSession() {
      const id = searchParams.get('id');

      if (!id) {
        return;
      }

      const session = await repository.getById(id);

      if (session) {
        setCurrentSession(session);
      }
    }

    loadSession();
  }, [searchParams, setCurrentSession]);

  function handleScore(value) {
    setShot(
      selected.roundIndex,
      selected.seriesIndex,
      selected.shotIndex,
      value
    );
  }

  return (
    <section className="session-editor-screen">
      <header className="session-summary-card">
        <div>
          <h2>{session.distanceMeters} м</h2>
          <p>{session.xCount}X · {session.tenCount}10</p>
        </div>

        <div className="session-total-score">
          <strong>{session.totalScore}</strong>
          <span>/{session.possibleScore}</span>
        </div>
      </header>

      {session.rounds.map((round, roundIndex) => (
        <div key={round.id} className="session-round-card">
          <div className="series-list">
            {round.series.map((series, seriesIndex) => (
              <div key={series.id} className="series-block">
                <div className="series-row">
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
                          setSelectedShot({
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

                {(series.comment || activeSeries(selected, roundIndex, seriesIndex)) && (
                  <SeriesComment
                    value={series.comment}
                    onChange={comment => {
                      setSeriesComment(roundIndex, seriesIndex, comment);
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <ScoreKeyboard onScore={handleScore} />
    </section>
  );
}

function activeSeries(selected, roundIndex, seriesIndex) {
  return (
    selected.roundIndex === roundIndex &&
    selected.seriesIndex === seriesIndex
  );
}
