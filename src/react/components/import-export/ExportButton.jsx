import { exportSessions } from '../../../services/import-export/import-export.service.js';

export function ExportButton({ sessions }) {
  function handleExport() {
    const json = exportSessions(sessions);

    const blob = new Blob([json], {
      type: 'application/json'
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');

    link.href = url;
    link.download = 'archery-history.json';
    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <button type="button" onClick={handleExport}>
      Экспортировать историю
    </button>
  );
}
