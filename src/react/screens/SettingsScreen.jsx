import { useState } from 'react';

import { useDarkMode } from '../hooks/useDarkMode.js';
import { ConfirmDialog } from '../components/dialogs/ConfirmDialog.jsx';
import { ExportButton } from '../components/import-export/ExportButton.jsx';
import { ImportButton } from '../components/import-export/ImportButton.jsx';
import { useSessionHistory } from '../hooks/useSessionHistory.js';

export function SettingsScreen() {
  const { enabled, toggle } = useDarkMode();
  const { sessions } = useSessionHistory();
  const [confirmClear, setConfirmClear] = useState(false);

  return (
    <section className="settings-screen">
      <div className="settings-group">
        <button type="button" onClick={toggle}>
          Тёмная тема: {enabled ? 'вкл' : 'выкл'}
        </button>

        <ExportButton sessions={sessions} />

        <ImportButton onImport={() => window.location.reload()} />

        <button
          type="button"
          className="destructive-button"
          onClick={() => setConfirmClear(true)}
        >
          Очистить историю
        </button>
      </div>

      {confirmClear && (
        <ConfirmDialog
          title="Очистить историю?"
          description="Все сохранённые тренировки будут удалены."
          confirmLabel="Очистить"
          onCancel={() => setConfirmClear(false)}
          onConfirm={() => {
            indexedDB.deleteDatabase('archery-pwa');
            setConfirmClear(false);
            window.location.reload();
          }}
        />
      )}
    </section>
  );
}
