# Performance Audit

## Goals

- Fast cold start
- Smooth score input
- Minimal re-renders
- Offline-first UX

## Targets

- First load under 2s on mobile
- 60fps score keyboard interactions
- Minimal layout shifts

## Checks

- Avoid giant bundles.
- Lazy-load screens.
- Keep animations GPU-friendly.
- Avoid blocking IndexedDB writes.
- Use debounce for autosave.
