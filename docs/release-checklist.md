# Release Checklist

## Before Release

- Run tests
- Verify IndexedDB migrations
- Verify import/export compatibility
- Test install flow on iOS
- Test offline launch
- Test update banner flow
- Verify manifest icons
- Verify GitHub Pages deployment

## Release

- Update CHANGELOG.md
- Create tag vX.Y.Z
- Push tag
- Verify release artifact

## After Release

- Verify production cache invalidation
- Verify service worker update flow
- Smoke-test session editor
