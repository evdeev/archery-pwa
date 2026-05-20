import { useEffect, useState } from 'react';

export function useServiceWorkerUpdates() {
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    if (!('serviceWorker' in navigator)) {
      return;
    }

    navigator.serviceWorker.register('/archery-pwa/sw.js')
      .then(registration => {
        registration.addEventListener('updatefound', () => {
          setUpdateAvailable(true);
        });
      });
  }, []);

  return {
    updateAvailable,
    reload() {
      window.location.reload();
    }
  };
}
