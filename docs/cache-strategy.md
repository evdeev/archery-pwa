# Production Cache Strategy

## Goals

- Offline-first
- Safe updates
- Avoid stale JS bundles
- Avoid runtime patching

## Rules

- Every release produces hashed assets.
- Service worker must not cache HTML forever.
- App shell should revalidate on launch.
- Static icons/fonts can use long cache.

## Update UX

- Show update banner when new build exists.
- Reload app only after user confirmation.

## GitHub Pages

Vite build output is deployed from dist/.
