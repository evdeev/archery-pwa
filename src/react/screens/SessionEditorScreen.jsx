import { ScoreKeyboard } from '../components/score-keyboard/ScoreKeyboard.jsx';

export function SessionEditorScreen() {
  return (
    <section className="session-editor-screen" aria-labelledby="session-editor-title">
      <h2 id="session-editor-title">Сессия</h2>

      <div className="session-round-card" aria-label="Раунд 1">
        <header className="session-round-header">
          <span>Раунд 1</span>
          <strong>0/300</strong>
        </header>

        <div className="series-list" role="list" aria-label="Серии">
          <div className="series-row active" role="listitem">
            <span className="series-number">1</span>
            <button className="shot-cell active" type="button">—</button>
            <button className="shot-cell" type="button">—</button>
            <button className="shot-cell" type="button">—</button>
          </div>
        </div>
      </div>

      <ScoreKeyboard onScore={() => {}} />
    </section>
  );
}
