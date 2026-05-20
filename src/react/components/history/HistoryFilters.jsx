const filters = [
  { value: 'all', label: 'Все' },
  { value: 'training', label: 'Тренировки' },
  { value: 'competition', label: 'Соревнования' }
];

export function HistoryFilters({ active, onChange }) {
  return (
    <div className="segmented-control">
      {filters.map(filter => (
        <button
          key={filter.value}
          type="button"
          className={active === filter.value ? 'active' : ''}
          onClick={() => onChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
