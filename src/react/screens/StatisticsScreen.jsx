import { useState } from 'react';

import { aggregateStatistics } from '../../domain/statistics/aggregated-statistics.js';
import { filterSessionsByPeriod } from '../../domain/statistics/statistics-periods.js';

import { useSessionHistory } from '../hooks/useSessionHistory.js';

import { AggregatedStatisticsCard } from '../components/statistics/AggregatedStatisticsCard.jsx';
import { ScoreTrendChart } from '../components/statistics/ScoreTrendChart.jsx';
import { StatisticsPeriods } from '../components/statistics/StatisticsPeriods.jsx';

export function StatisticsScreen() {
  const [period, setPeriod] = useState('month');

  const { sessions } = useSessionHistory();

  const filtered = filterSessionsByPeriod(sessions, period);
  const statistics = aggregateStatistics(filtered);

  return (
    <section className="statistics-screen">
      <StatisticsPeriods
        active={period}
        onChange={setPeriod}
      />

      <AggregatedStatisticsCard statistics={statistics} />

      <div className="statistics-chart-card">
        <ScoreTrendChart sessions={filtered} />
      </div>
    </section>
  );
}
