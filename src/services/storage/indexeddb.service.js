import { openDB } from 'idb';

const DATABASE_NAME = 'archery-pwa';
const DATABASE_VERSION = 2;

export async function getDatabase() {
  return openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
      if (!database.objectStoreNames.contains('sessions')) {
        database.createObjectStore('sessions', {
          keyPath: 'id'
        });
      }

      if (!database.objectStoreNames.contains('settings')) {
        database.createObjectStore('settings', {
          keyPath: 'id'
        });
      }

      if (!database.objectStoreNames.contains('equipment')) {
        database.createObjectStore('equipment', {
          keyPath: 'id'
        });
      }
    }
  });
}
