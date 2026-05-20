import { useEffect, useState } from 'react';

const STORAGE_KEY = 'archery-pwa-dark-mode';

export function useDarkMode() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored === 'true') {
      document.documentElement.classList.add('dark-mode');
      setEnabled(true);
    }
  }, []);

  function toggle() {
    const next = !enabled;

    setEnabled(next);

    localStorage.setItem(STORAGE_KEY, String(next));

    document.documentElement.classList.toggle('dark-mode', next);
  }

  return {
    enabled,
    toggle
  };
}
