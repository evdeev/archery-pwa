import { useEffect } from 'react';

import { IndexedDbSessionRepository } from '../../services/repositories/indexeddb-session.repository.js';

const repository = new IndexedDbSessionRepository();

export function usePersistentSession(session) {
  useEffect(() => {
    repository.save(session);
  }, [session]);
}
