import { loadStorage, saveStorage } from '../storage/local-storage.service.js';

export class SessionRepository {
  getAll() {
    const storage = loadStorage();
    return storage?.sessions ?? [];
  }

  save(session) {
    const storage = loadStorage() ?? {
      schemaVersion: '0.1.0',
      sessions: []
    };

    storage.sessions.push(session);

    saveStorage(storage);
  }
}
