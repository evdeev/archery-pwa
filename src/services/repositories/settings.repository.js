import { getDatabase } from '../storage/indexeddb.service.js';

const SETTINGS_ID = 'app-settings';

export class SettingsRepository {
  async get() {
    const database = await getDatabase();
    return database.get('settings', SETTINGS_ID);
  }

  async save(settings) {
    const database = await getDatabase();
    await database.put('settings', {
      id: SETTINGS_ID,
      ...settings,
      updatedAt: new Date().toISOString()
    });
  }
}
