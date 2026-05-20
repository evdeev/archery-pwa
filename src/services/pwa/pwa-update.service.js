export function setupPwaUpdateFlow() {
  if (!('serviceWorker' in navigator)) {
    return;
  }

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    window.location.reload();
  });
}
