import { getDatabase } from '../storage/indexeddb.service.js';

export class IndexedDbSessionRepository {
  async save(session) {
    const database = await getDatabase();

    await database.put('sessions', session);
  }

  async getAll() {
    const database = await getDatabase();

    return database.getAll('sessions');
  }
}
