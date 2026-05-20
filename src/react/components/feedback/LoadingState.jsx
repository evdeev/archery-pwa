export function LoadingState() {
  return (
    <div className="loading-state" aria-live="polite">
      <div className="loading-spinner" />
      <span>Загрузка…</span>
    </div>
  );
}
