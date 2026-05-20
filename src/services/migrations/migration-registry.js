const migrations = new Map();

export function registerMigration(version, migration) {
  migrations.set(version, migration);
}

export function runMigrations(data, currentVersion) {
  let result = structuredClone(data);

  for (const [version, migration] of migrations.entries()) {
    if (version > currentVersion) {
      result = migration(result);
    }
  }

  return result;
}
