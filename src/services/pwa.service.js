export async function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) {
    return;
  }

  window.addEventListener('load', async () => {
    try {
      await navigator.serviceWorker.register('./public/sw.js');
      console.log('[PWA] Service worker registered');
    } catch (error) {
      console.error('[PWA] Service worker error', error);
    }
  });
}
