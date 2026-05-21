# Crocos QA Automation

Проект для автоматизированного тестирования с использованием Cypress и TypeScript.

## Стек

- [Cypress](https://www.cypress.io/) — E2E тестирование
- TypeScript
- Page Object Model (POM)
- Docker

## Структура проекта

```
crocos-qa-automation/
├── cypress/
│   ├── e2e/                        # Тесты
│   │   ├── auth/
│   │   │   ├── login.cy.ts         # Тесты авторизации
│   │   │   └── register.cy.ts      # Тесты регистрации
│   │   ├── profile/
│   │   │   └── profile.cy.ts       # Тесты профиля пользователя
│   │   └── smoke/
│   │       └── smoke.cy.ts         # Smoke-тесты (базовая проверка)
│   ├── fixtures/                   # Тестовые данные (JSON)
│   │   ├── users.json
│   │   └── products.json
│   ├── support/
│   │   ├── commands.ts             # Кастомные команды Cypress
│   │   ├── e2e.ts                  # Глобальные настройки и импорты
│   │   └── pages/                  # Page Object Model
│   │       ├── LoginPage.ts
│   │       └── ProfilePage.ts
│   ├── downloads/                  # Скачанные в ходе тестов файлы
│   ├── screenshots/                # Скриншоты при падении тестов
│   └── videos/                     # Видеозаписи прогона тестов
├── cypress.config.ts               # Конфигурация Cypress
├── tsconfig.json                   # Конфигурация TypeScript
├── Dockerfile                      # Docker-образ для запуска тестов
├── docker-compose.yml              # Запуск тестов против локального приложения
└── package.json
```

## Установка

Убедитесь, что установлен [Node.js](https://nodejs.org/) версии 18 или выше.

```bash
npm install
```

## Запуск тестов

```bash
# Открыть Cypress GUI (интерактивный режим)
npm run cy:open

# Запустить все тесты в headless режиме
npm run cy:run
```

## Запуск тестов в Docker

Убедитесь, что ваше приложение запущено на `localhost:3000`, затем:

```bash
docker compose up --build
```

Артефакты (скриншоты, видео) будут доступны локально в `cypress/screenshots/` и `cypress/videos/`.

## Конфигурация

Основные настройки находятся в [cypress.config.ts](cypress.config.ts):

| Параметр      | Значение по умолчанию    | Описание                       |
|---------------|--------------------------|--------------------------------|
| `baseUrl`     | `http://localhost:3000`  | Базовый URL тестируемого сайта |
| `specPattern` | `cypress/e2e/**/*.cy.ts` | Паттерн поиска тест-файлов     |

Измените `baseUrl` в `cypress.config.ts` под свой проект перед запуском тестов.

## Подходы

- **Page Object Model** — логика взаимодействия со страницами вынесена в `cypress/support/pages/`
- **Fixtures** — тестовые данные хранятся отдельно в `cypress/fixtures/`
- **Custom Commands** — переиспользуемые команды описаны в `cypress/support/commands.ts`
