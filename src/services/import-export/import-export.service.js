export function exportSessions(sessions) {
  return JSON.stringify({
    schemaVersion: '0.1.0',
    exportedAt: new Date().toISOString(),
    sessions
  }, null, 2);
}

export function importSessions(raw) {
  const parsed = JSON.parse(raw);

  if (!parsed.sessions) {
    throw new Error('Invalid import file');
  }

  return parsed.sessions;
}
