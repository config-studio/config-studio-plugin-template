# Config Studio Plugin Template 🚀

Шаблон официального или пользовательского расширения для **Config Studio** с предустановленным TypeScript, esbuild, системой тестирования и автоматическим CI/CD релизом в GitHub Actions.

---

## ⚡ Быстрый старт: создание нового плагина за 4 шага

### Шаг 1. Создание репозитория из шаблона
1. Нажмите **Use this template** в GitHub (или склонируйте этот репозиторий в новую папку).
2. Задайте имя новому репозиторию (рекомендуемый формат: `config-studio-<name>`, например `config-studio-nginx`).

### Шаг 2. Настройка манифеста `plugin.json`
Откройте `plugin.json` и настройте параметры:
```json
{
  "id": "my-plugin",
  "name": "My Custom Plugin",
  "version": "1.0.0",
  "description": "Описание возможностей плагина",
  "author": "Your Name <you@example.com>",
  "license": "MIT",
  "minCoreVersion": "2.0.0",
  "entrypoints": {
    "main": "main.js",
    "style": "style.css"
  },
  "permissions": [
    "fs:read",
    "editor:read",
    "editor:write",
    "ui:toolbar"
  ]
}
```

### Шаг 3. Локальная разработка и тестирование
Установите зависимости:
```bash
npm install
```

Сборка бандла:
```bash
npm run build
```

Запуск unit-тестов:
```bash
npm run test:ts
```

Упаковка в пакет `.cspkg`:
```bash
npm run pack
```

### Шаг 4. Автоматический релиз через GitHub Actions (CI/CD)
В репозитории уже настроен рабочий процесс `.github/workflows/release.yml`.

Чтобы выпустить новый релиз плагина:
```bash
git tag v1.0.0
git push origin v1.0.0
```
Или запустите вручную в GitHub: **Actions** -> **Build and Release Plugin Package** -> **Run workflow**.

GitHub Actions автоматически:
1. Запустит unit-тесты (`npm run test:ts`).
2. Соберет бандл `main.js`.
3. Упакует бинарный пакет `<plugin-id>-<version>.cspkg` и `<plugin-id>.cspkg`.
4. Сгенерирует резервный `.zip` и контрольные суммы `SHA256SUMS.txt`.
5. Опубликует официальный **GitHub Release** с прикрепленными файлами.

---

## 📁 Структура проекта

```
config-studio-plugin-template/
├── .github/
│   └── workflows/
│       ├── release.yml         # CI/CD автоматическая сборка и релиз пакета .cspkg
│       └── ci.yml              # Проверка тестов и сборки при pull request
├── src/
│   ├── index.ts                # Точка входа плагина
│   └── types.ts                # Интерфейсы и типы
├── test/
│   └── index.test.ts           # Unit-тесты
├── plugin.json                 # Манифест плагина
├── package.json                # Скрипты и зависимости
├── tsconfig.json               # Настройки TypeScript
├── build.js                    # Сборка через esbuild
├── pack.js                     # Локальный упаковщик в .cspkg
├── style.css                   # Стили интерфейса
└── README.md                   # Инструкция
```

---

## 📄 Лицензия
MIT License © 2026 Config Studio Team
