import { useEffect } from 'react';

import { IndexedDbSessionRepository } from '../../services/repositories/indexeddb-session.repository.js';

const repository = new IndexedDbSessionRepository();

export function useDebouncedAutosave(session, delay = 400) {
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      repository.save(session);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [session, delay]);
}
