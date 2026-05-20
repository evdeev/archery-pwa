export function AppUpdateDialog({ onReload }) {
  return (
    <div className="app-update-dialog">
      <div>
        <strong>Доступно обновление</strong>
        <p>Новая версия приложения готова к установке.</p>
      </div>

      <button type="button" onClick={onReload}>
        Обновить
      </button>
    </div>
  );
}
