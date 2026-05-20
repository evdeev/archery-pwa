let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredPrompt = event;
});

export async function showInstallPrompt() {
  if (!deferredPrompt) {
    return false;
  }

  deferredPrompt.prompt();

  const result = await deferredPrompt.userChoice;

  deferredPrompt = null;

  return result.outcome === 'accepted';
}
