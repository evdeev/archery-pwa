import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HistoryScreen } from '../screens/HistoryScreen.jsx';
import { StatisticsScreen } from '../screens/StatisticsScreen.jsx';
import { EquipmentScreen } from '../screens/EquipmentScreen.jsx';
import { SessionEditorScreen } from '../screens/SessionEditorScreen.jsx';
import { ImportExportScreen } from '../screens/ImportExportScreen.jsx';

export function AppRouter() {
  return (
    <BrowserRouter basename="/archery-pwa/">
      <Routes>
        <Route path="/" element={<HistoryScreen />} />
        <Route path="/session" element={<SessionEditorScreen />} />
        <Route path="/statistics" element={<StatisticsScreen />} />
        <Route path="/equipment" element={<EquipmentScreen />} />
        <Route path="/settings" element={<ImportExportScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
