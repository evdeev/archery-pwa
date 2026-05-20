const queue = [];

export function enqueueOfflineAction(action) {
  queue.push({
    createdAt: Date.now(),
    action
  });
}

export function flushOfflineQueue() {
  return [...queue];
}
