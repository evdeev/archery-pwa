const STORAGE_KEY = 'archery-pwa';

export function loadStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return null;
  }

  return JSON.parse(raw);
}

export function saveStorage(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function clearStorage() {
  localStorage.removeItem(STORAGE_KEY);
}
