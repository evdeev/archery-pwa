import { HistoryScreen } from './screens/HistoryScreen.jsx';

export function App() {
  return (
    <div className="app-shell">
      <header className="top-bar">
        <h1>Archery Scores</h1>
      </header>

      <main className="screen-container">
        <HistoryScreen />
      </main>

      <nav className="tab-bar">
        <button className="tab active">История</button>
        <button className="tab">Статистика</button>
        <button className="tab">Экипировка</button>
        <button className="tab">Настройки</button>
      </nav>
    </div>
  );
}
