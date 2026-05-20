# ADR-0001 — Project Architecture

## Status
Accepted

## Context

Проект создаётся как лёгкий iOS-style PWA без тяжёлого frontend framework.

Требования:

- GitHub Pages compatible
- Offline-first
- Predictable structure
- No runtime patching
- No giant inline JS
- Component-based architecture
- Long-term maintainability

## Decision

Использовать:

- Native ES Modules
- Static HTML/CSS/JS
- Component folders
- App shell architecture
- Service layer
- Domain layer
- Store abstraction
- Router abstraction
- GitHub Actions deploy

Без:

- React
- Vue
- Angular
- Runtime hydration
- Complex build pipeline

## Consequences

Плюсы:

- Очень простой deploy
- Минимальный runtime overhead
- Полный контроль над PWA
- Простая отладка
- Предсказуемый cache

Минусы:

- Нужно поддерживать собственную архитектуру
- Меньше готовой экосистемы
- Нужно самим следить за состоянием приложения
