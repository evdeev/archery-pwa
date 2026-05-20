export function SeriesComment({ value, onChange }) {
  return (
    <textarea
      className="series-comment"
      placeholder="Добавить заметку"
      value={value}
      onChange={event => onChange(event.target.value)}
      rows={2}
    />
  );
}
