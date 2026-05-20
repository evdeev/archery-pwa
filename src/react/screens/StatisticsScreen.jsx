import { useSessionStore } from '../../store/useSessionStore.js';

import { buildScoreTrend } from '../../domain/statistics/statistics-engine.js';

import { ScoreHistoryChart } from '../components/charts/ScoreHistoryChart.jsx';

export function StatisticsScreen() {
  const session = useSessionStore(state => state.currentSession);

  const chartData = buildScoreTrend([
    {
      date: new Date().toLocaleDateString(),
      totalScore: session.totalScore
    }
  ]);

  return (
    <section className="statistics-screen">
      <header className="segmented-control">
        <button className="active">Месяц</button>
        <button>Год</button>
      </header>

      <div className="statistics-card">
        <ScoreHistoryChart data={chartData} />
      </div>
    </section>
  );
}
