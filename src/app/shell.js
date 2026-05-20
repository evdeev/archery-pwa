import { HistoryScreen } from '../screens/history.screen.js';

export function renderAppShell() {
  return `
    <div class="app-shell">
      <header class="top-bar">
        <h1>Archery Scores</h1>
      </header>

      <main class="screen-container">
        ${HistoryScreen()}
      </main>

      <nav class="tab-bar">
        <button class="tab active">История</button>
        <button class="tab">Статистика</button>
        <button class="tab">Экипировка</button>
        <button class="tab">Настройки</button>
      </nav>
    </div>
  `;
}
