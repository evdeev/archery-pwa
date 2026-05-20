const state = {};
const listeners = new Set();

export function getState() {
  return structuredClone(state);
}

export function setState(patch) {
  Object.assign(state, patch);

  for (const listener of listeners) {
    listener(getState());
  }
}

export function subscribe(listener) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}
