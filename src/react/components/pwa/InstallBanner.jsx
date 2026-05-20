export function InstallBanner({ onInstall, onClose }) {
  return (
    <div className="install-banner">
      <div>
        <strong>Установите приложение</strong>
        <p>Оффлайн режим и быстрый доступ с домашнего экрана.</p>
      </div>

      <div className="install-banner-actions">
        <button type="button" onClick={onClose}>
          Позже
        </button>

        <button type="button" onClick={onInstall}>
          Установить
        </button>
      </div>
    </div>
  );
}
