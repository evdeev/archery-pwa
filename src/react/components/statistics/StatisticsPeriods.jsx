const periods = [
  { value: 'week', label: 'Неделя' },
  { value: 'month', label: 'Месяц' },
  { value: 'quarter', label: 'Квартал' },
  { value: 'year', label: 'Год' }
];

export function StatisticsPeriods({ active, onChange }) {
  return (
    <div className="segmented-control">
      {periods.map(period => (
        <button
          key={period.value}
          type="button"
          className={active === period.value ? 'active' : ''}
          onClick={() => onChange(period.value)}
        >
          {period.label}
        </button>
      ))}
    </div>
  );
}
