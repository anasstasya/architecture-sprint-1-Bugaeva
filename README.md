# Задание 1

## Уровень 1. Проектирование

В качестве инструмента выбран Webpack Module Federation, т.к. в проекте уже используется Webpack, и расширение техрадара не планируется.

Кроме этого, каждый микрофронтент планируется и дальше развивать на базе библиотеки React, то использование Webpack Module Federation дает дополнительные плюсы:
- переиспользование общих зависимостей (react, react-dom и т.д.)
- tree-shaking
- возможности ленивой загрузки модулей

## Уровень 2. Планирование изменений

Подходящим вариантом является разбивка по бизнес функциям, т.е. вертикальная нарезка.

### Сервисы

#### Основное приложение

Загружает другие модули на старте приложения или в зависимости от действий пользователя.

Отображает основной шаблон страницы.

#### Авторизации (Auth)

Авторизация и регистрация пользователей.

#### Профиля пользователя (Profile)

Работа с профилем пользователя:
- редактирование имени и описания профиля;
- изменение аватара профиля.

Если появятся дополнительные требования по взаимодействию с профилем (например, удаление профиля), они должны реализовываться в рамках этого сервиса.

#### Галерея (Gallery)

Работа с карточками: 
- добавление новой карточки;
- удаление существующей карточки.

Сюда в будущем могут быть добавлены другие возможности, такие как:
- добавление геолокации к карточке;
- фильтрация отображения карточек.

#### Показатели социальной активности (Stats)

На данный момент в приложении есть возможность ставить лайки, однако в будущем могут быть добавлены другие показатели:
- показы карточки;
- просмотры карточки;
- репосты.

### Структура кода
```
.
├── index.spec.js
├── microfrontend
│   ├── auth
│   │   ├── README.md
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   ├── public
│   │   ├── src
│   │   │   ├── App.css
│   │   │   ├── App.js
│   │   │   ├── blocks
│   │   │   │   ├── auth-form
│   │   │   │   ├── login
│   │   │   │   └── popup
│   │   │   ├── components
│   │   │   │   ├── InfoTooltip.js
│   │   │   │   ├── Login.js
│   │   │   │   └── Register.js
│   │   │   ├── index.css
│   │   │   ├── index.js
│   │   │   └── utils
│   │   │       └── auth.js
│   │   └── webpack.config.js
│   ├── gallery
│   │   ├── README.md
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   ├── public
│   │   ├── src
│   │   │   ├── App.css
│   │   │   ├── App.js
│   │   │   ├── blocks
│   │   │   │   ├── card
│   │   │   │   ├── places
│   │   │   │   └── popup
│   │   │   ├── components
│   │   │   │   ├── AddPlacePopup.js
│   │   │   │   ├── Card.js
│   │   │   │   ├── ImagePopup.js
│   │   │   │   └── PopupWithForm.js
│   │   │   ├── index.css
│   │   │   ├── index.js
│   │   │   └── utils
│   │   └── webpack.config.js
│   └── profile
│   │   ├── README.md
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   ├── public
│   │   ├── src
│   │   │   ├── App.css
│   │   │   ├── App.js
│   │   │   ├── blocks
│   │   │   │   ├── popup
│   │   │   │   └── profile
│   │   │   ├── components
│   │   │   │   ├── EditAvatarPopup.js
│   │   │   │   └── EditProfilePopup.js
│   │   │   ├── index.css
│   │   │   ├── index.js
│   │   │   └── utils
│   │   └── webpack.config.js
│   └── stats
│       ├── README.md
│       ├── package-lock.json
│       ├── package.json
│       ├── public
│       ├── src
│       │   ├── App.css
│       │   ├── App.js
│       │   ├── blocks
│       │   │   └── like
│       │   ├── components
│       │   │   └── Like.js
│       │   ├── index.css
│       │   ├── index.js
│       │   └── utils
│       └── webpack.config.js
├── package-lock.json
├── package.json
├── public
├── src
│   ├── blocks
│   │   ├── content
│   │   ├── footer
│   │   ├── header
│   │   ├── page
│   │   └── popup
│   ├── components
│   │   ├── App.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Main.js
│   │   ├── PopupWithForm.js
│   │   └── ProtectedRoute.js
│   ├── contexts
│   │   └── CurrentUserContext.js
│   ├── images
│   ├── index.css
│   └── index.js
└── webpack.config.js
```
# Задание 2

[drawio](https://drive.google.com/file/d/11sAgvMRHTQG7KgQc_ju1FiI1pRSThffD/view)