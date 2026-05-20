import { showInstallPrompt } from '../../../services/pwa/install-prompt.service.js';

export function InstallDialog() {
  async function handleInstall() {
    await showInstallPrompt();
  }

  return (
    <div className="install-dialog">
      <div>
        <strong>Установить Archery PWA</strong>
        <p>Быстрый доступ и оффлайн работа.</p>
      </div>

      <button type="button" onClick={handleInstall}>
        Установить
      </button>
    </div>
  );
}
