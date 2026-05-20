export function triggerLightHaptic() {
  if ('vibrate' in navigator) {
    navigator.vibrate(10);
  }
}

export function triggerSelectionHaptic() {
  if ('vibrate' in navigator) {
    navigator.vibrate([8]);
  }
}
