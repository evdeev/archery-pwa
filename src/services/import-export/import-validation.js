import { SessionValidator } from '../../domain/validation/session.validator.js';

export function validateImportedSessions(sessions) {
  return sessions.every(session => {
    const result = SessionValidator.safeParse(session);

    return result.success;
  });
}
