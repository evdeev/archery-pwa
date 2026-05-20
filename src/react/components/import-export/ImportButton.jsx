import { importSessions } from '../../../services/import-export/import-export.service.js';

export function ImportButton({ onImport }) {
  async function handleImport(event) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const text = await file.text();

    const sessions = importSessions(text);

    onImport(sessions);
  }

  return (
    <label className="import-button">
      Импортировать историю

      <input
        hidden
        type="file"
        accept="application/json"
        onChange={handleImport}
      />
    </label>
  );
}
