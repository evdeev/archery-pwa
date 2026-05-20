import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { LoadingState } from '../components/feedback/LoadingState.jsx';

const HistoryScreen = lazy(() => import('../screens/HistoryScreen.jsx').then(module => ({ default: module.HistoryScreen })));
const StatisticsScreen = lazy(() => import('../screens/StatisticsScreen.jsx').then(module => ({ default: module.StatisticsScreen })));
const EquipmentScreen = lazy(() => import('../screens/EquipmentScreen.jsx').then(module => ({ default: module.EquipmentScreen })));
const SessionEditorScreen = lazy(() => import('../screens/SessionEditorScreen.jsx').then(module => ({ default: module.SessionEditorScreen })));
const SettingsScreen = lazy(() => import('../screens/SettingsScreen.jsx').then(module => ({ default: module.SettingsScreen })));
const OnboardingScreen = lazy(() => import('../screens/OnboardingScreen.jsx').then(module => ({ default: module.OnboardingScreen })));

export function AppRouter() {
return (
<Suspense fallback={<LoadingState />}> <Routes>
  <Route path="/" element={<HistoryScreen />} />
  <Route path="/onboarding" element={<OnboardingScreen />} />
  <Route path="/session" element={<SessionEditorScreen />} />
  <Route path="/statistics" element={<StatisticsScreen />} />
  <Route path="/equipment" element={<EquipmentScreen />} />
  <Route path="/settings" element={<SettingsScreen />} /> </Routes> </Suspense>
);
}
