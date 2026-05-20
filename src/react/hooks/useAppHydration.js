import { useEffect } from 'react';

import { IndexedDbSessionRepository } from '../../services/repositories/indexeddb-session.repository.js';
import { useSessionStore } from '../../store/useSessionStore.js';

const repository = new IndexedDbSessionRepository();

export function useAppHydration() {
  const setHydratedSession = useSessionStore(state => state.updateSessionSettings);

  useEffect(() => {
    async function hydrate() {
      const sessions = await repository.getAll();

      if (!sessions.length) {
        return;
      }

      const latest = sessions.at(-1);

      setHydratedSession(latest);
    }

    hydrate();
  }, [setHydratedSession]);
}
