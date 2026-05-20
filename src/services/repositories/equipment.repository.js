import { getDatabase } from '../storage/indexeddb.service.js';

export class EquipmentRepository {
  async getAll() {
    const database = await getDatabase();
    return database.getAll('equipment');
  }

  async save(item) {
    const database = await getDatabase();

    await database.put('equipment', {
      ...item,
      updatedAt: new Date().toISOString()
    });
  }

  async remove(id) {
    const database = await getDatabase();
    await database.delete('equipment', id);
  }
}
