# Crocos QA Automation

Проект для автоматизированного тестирования с использованием Cypress.

## Стек

- [Cypress](https://www.cypress.io/) — E2E тестирование
- JavaScript
- Page Object Model (POM)

## Структура проекта

```
crocos-qa-automation/
├── cypress/
│   ├── e2e/                        # Тесты
│   │   ├── auth/
│   │   │   ├── login.cy.js         # Тесты авторизации
│   │   │   └── register.cy.js      # Тесты регистрации
│   │   ├── profile/
│   │   │   └── profile.cy.js       # Тесты профиля пользователя
│   │   └── smoke/
│   │       └── smoke.cy.js         # Smoke-тесты (базовая проверка)
│   ├── fixtures/                   # Тестовые данные (JSON)
│   │   ├── users.json
│   │   └── products.json
│   ├── support/
│   │   ├── commands.js             # Кастомные команды Cypress
│   │   ├── e2e.js                  # Глобальные настройки и импорты
│   │   └── pages/                  # Page Object Model
│   │       ├── LoginPage.js
│   │       └── ProfilePage.js
│   ├── downloads/                  # Скачанные в ходе тестов файлы
│   ├── screenshots/                # Скриншоты при падении тестов
│   └── videos/                     # Видеозаписи прогона тестов
├── cypress.config.js               # Конфигурация Cypress
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

## Конфигурация

Основные настройки находятся в [cypress.config.js](cypress.config.js):

| Параметр    | Значение по умолчанию  | Описание                       |
|-------------|------------------------|--------------------------------|
| `baseUrl`   | `http://localhost:3000` | Базовый URL тестируемого сайта |
| `specPattern` | `cypress/e2e/**/*.cy.js` | Паттерн поиска тест-файлов  |

Измените `baseUrl` в `cypress.config.js` под свой проект перед запуском тестов.

## Подходы

- **Page Object Model** — логика взаимодействия со страницами вынесена в `cypress/support/pages/`
- **Fixtures** — тестовые данные хранятся отдельно в `cypress/fixtures/`
- **Custom Commands** — переиспользуемые команды описаны в `cypress/support/commands.js`
