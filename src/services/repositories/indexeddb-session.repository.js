import { getDatabase } from '../storage/indexeddb.service.js';

export class IndexedDbSessionRepository {
  async save(session) {
    const database = await getDatabase();

    await database.put('sessions', {
      ...session,
      updatedAt: new Date().toISOString()
    });
  }

  async getAll() {
    const database = await getDatabase();

    return database.getAll('sessions');
  }

  async getById(id) {
    const database = await getDatabase();

    return database.get('sessions', id);
  }

  async remove(id) {
    const database = await getDatabase();

    await database.delete('sessions', id);
  }
}
