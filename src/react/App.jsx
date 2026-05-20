import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './router/AppRouter.jsx';
import { TabBar } from './components/navigation/TabBar.jsx';

export function App() {
  return (
    <BrowserRouter basename="/archery-pwa/">
      <div className="app-shell">
        <header className="top-bar">
          <h1>Archery Scores</h1>
        </header>

        <main className="screen-container">
          <AppRouter />
        </main>

        <TabBar />
      </div>
    </BrowserRouter>
  );
}
