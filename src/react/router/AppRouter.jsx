import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HistoryScreen } from '../screens/HistoryScreen.jsx';

export function AppRouter() {
  return (
    <BrowserRouter basename="/archery-pwa/">
      <Routes>
        <Route path="/" element={<HistoryScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
