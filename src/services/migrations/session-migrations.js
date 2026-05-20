import { registerMigration } from './migration-registry.js';

registerMigration('0.2.0', data => {
  return {
    ...data,
    migratedTo: '0.2.0'
  };
});
