import { useEffect, useState } from 'react';

import { IndexedDbSessionRepository } from '../../services/repositories/indexeddb-session.repository.js';

const repository = new IndexedDbSessionRepository();

export function useSessionHistory() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const result = await repository.getAll();

      result.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });

      setSessions(result);
      setLoading(false);
    }

    load();
  }, []);

  return {
    sessions,
    loading,
    reload: async () => {
      const result = await repository.getAll();
      setSessions(result);
    }
  };
}
