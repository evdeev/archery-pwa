export function AppUpdateBanner({ onReload }) {
  return (
    <div className="update-banner">
      <span>Доступно обновление приложения</span>

      <button onClick={onReload}>
        Обновить
      </button>
    </div>
  );
}
