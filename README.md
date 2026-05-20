# Archery PWA

Чистый PWA для ведения стрелковых сессий.

## Архитектура

- `src/app` — запуск приложения, роутинг, app shell.
- `src/components` — переиспользуемые UI-компоненты.
- `src/screens` — экраны приложения.
- `src/services` — работа с данными, PWA, storage.
- `src/domain` — доменные модели и константы.
- `public` — manifest, service worker, иконки и статические файлы.

## Команды

Проект без сборщика и без runtime patching. Для локальной разработки достаточно любого статического сервера:

```bash
python3 -m http.server 5173
```

После этого открыть:

```text
http://localhost:5173
```

## Ветки

- `main` — production-ветка, из неё публикуется GitHub Pages.
- `develop` — основная ветка разработки.
- feature-ветки — от `develop`, затем PR обратно в `develop`.

## Deploy

GitHub Actions публикует содержимое репозитория на GitHub Pages при push в `main`.
