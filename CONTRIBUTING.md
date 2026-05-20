# CONTRIBUTING

## Workflow

Основной workflow проекта:

```text
feature branch -> develop -> main -> release
```

## Как вносить изменения

1. Создать ветку от `develop`.
2. Сделать изменение.
3. Проверить локально.
4. Обновить документацию при необходимости.
5. Обновить `CHANGELOG.md`, если изменение заметное.
6. Создать Pull Request в `develop`.

## Naming

### Feature branches

```text
feature/history-screen
feature/import-export
feature/equipment
```

### Fix branches

```text
fix/pwa-cache
fix/session-input
```

## Commit style

Рекомендуемый формат:

```text
feat: add session screen
fix: correct service worker cache
refactor: split history service
style: improve ios spacing
docs: update changelog
```

## Pull Request checklist

Перед PR:

- [ ] Нет giant inline JS.
- [ ] Компоненты разделены.
- [ ] Нет смешивания UI и storage логики.
- [ ] Проверен GitHub Pages path.
- [ ] Проверен PWA.
- [ ] Обновлён CHANGELOG.
- [ ] Нет случайных файлов.

## Releases

Release создаётся через git tag:

```bash
git tag v0.1.0
git push origin v0.1.0
```

GitHub Actions автоматически создаст release.
