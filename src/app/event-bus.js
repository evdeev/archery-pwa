const listeners = new Map();

export function emit(eventName, payload) {
  const handlers = listeners.get(eventName) ?? [];

  for (const handler of handlers) {
    handler(payload);
  }
}

export function on(eventName, handler) {
  const handlers = listeners.get(eventName) ?? [];

  handlers.push(handler);
  listeners.set(eventName, handlers);
}
