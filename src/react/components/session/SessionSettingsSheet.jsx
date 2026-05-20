export function SessionSettingsSheet({ settings, onChange }) {
  return (
    <section className="session-settings-sheet">
      <label>
        Дистанция
        <select
          value={settings.distanceMeters}
          onChange={event => onChange({
            distanceMeters: Number(event.target.value)
          })}
        >
          <option value={18}>18 м</option>
          <option value={10}>10 м</option>
        </select>
      </label>

      <label>
        Выстрелы
        <select
          value={settings.totalShots}
          onChange={event => onChange({
            totalShots: Number(event.target.value)
          })}
        >
          <option value={30}>30</option>
          <option value={60}>60</option>
        </select>
      </label>
    </section>
  );
}
