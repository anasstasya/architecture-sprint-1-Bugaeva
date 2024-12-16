
1 Задание
---

1.	Проектирование:
   
	Выбран Single SPA для организации микрофронтендов. 

	Логические границы определены на основе функциональных модулей: Профиль, Галерея, Лайки.

    Single SPA предоставляет гибкость для интеграции независимых модулей. Галерея отделена от других микрофронтендов, что позволяет масштабировать проект и одновременно разрабатывать разные модули.

3.	Планирование изменений:
   
	Каждый микрофронтенд имеет изолированную структуру.
  Функциональность разделена по компонентам, стилям и утилитам.  
  Интеграция выполняется через root-config, обеспечивая маршрутизацию и взаимодействие.

```
Схема архитектуры

Root Config
  ├── Profile Microfrontend
  ├── Gallery Microfrontend
  └── Likes Microfrontend

```

Структура для всех микрофронтендов проекта Mesto

```
/root-config

/src
  index.js                 // Точка входа для корневой конфигурации, инициализирует Single SPA и маршрутизацию.
  root-config.js           // Конфигурация для регистрации и маршрутизации микрофронтендов.
package.json               // Зависимости и скрипты для запуска корневой конфигурации.
webpack.config.js          // Настройки Webpack для сборки root-config.


/profile-microfrontend

/src
  /components
    Profile.js             // Основной компонент для отображения профиля пользователя.
    EditProfile.js         // Компонент для редактирования профиля (форма).
  /styles
    profile.css            // Стили для компонента профиля.
    edit-profile.css       // Стили для формы редактирования профиля.
  /utils
    profileUtils.js        // Утилиты для работы с профилем, включая запросы к API.
  index.js                 // Точка входа микрофронтенда, реализует методы mount, bootstrap и unmount.
package.json               // Зависимости и скрипты для запуска микрофронтенда профиля.
webpack.config.js          // Настройки Webpack для сборки profile-microfrontend.


/gallery-microfrontend

/src
  /components
    Gallery.js             // Основной компонент для отображения галереи фотографий.
    UploadPhoto.js         // Компонент для загрузки новых фотографий.
    DeletePhoto.js         // Компонент для удаления фотографий.
  /styles
    gallery.css            // Стили для галереи фотографий.
    upload-photo.css       // Стили для компонента загрузки фотографий.
    delete-photo.css       // Стили для компонента удаления фотографий.
  /utils
    galleryUtils.js        // Утилиты для работы с фотографиями, включая взаимодействие с API.
  index.js                 // Точка входа микрофронтенда, реализует методы mount, bootstrap и unmount.
package.json               // Зависимости и скрипты для запуска микрофронтенда галереи.
webpack.config.js          // Настройки Webpack для сборки gallery-microfrontend.


/likes-microfrontend

/src
  /components
    LikeButton.js          // Кнопка для постановки/удаления лайков.
    LikeCounter.js         // Компонент для отображения количества лайков под фотографиями.
  /styles
    like-button.css        // Стили для кнопки лайков.
    like-counter.css       // Стили для счётчика лайков.
  /utils
    likesUtils.js          // Утилиты для работы с API лайков.
  index.js                 // Точка входа микрофронтенда, реализует методы mount, bootstrap и unmount.
package.json               // Зависимости и скрипты для запуска микрофронтенда лайков.
webpack.config.js          // Настройки Webpack для сборки likes-microfrontend.


```

Запуск приложения
---
### Процесс и последовательность запуска всех микрофронтендов в проекте Mesto

#### **1. Установка общих требований**
Перед началом работы убедитесь, что следующие инструменты установлены:
- **Node.js** (версия 14 или выше).
- **npm** или **yarn** (менеджер пакетов).

#### **2. Общая последовательность запуска**
Каждый микрофронтенд запускается отдельно, а затем связывается корневым приложением через `root-config`. Следуйте инструкциям ниже:

---

### **Шаг 1: Установка зависимостей**
Перейдите в корневую папку каждого микрофронтенда и установите зависимости.

Пример команды:
```bash
cd root-config
npm install
```

Повторите это для всех микрофронтендов:
```bash
cd profile-microfrontend
npm install

cd gallery-microfrontend
npm install

cd likes-microfrontend
npm install
```

---

### **Шаг 2: Запуск микрофронтендов**
Каждый микрофронтенд запускается как отдельный сервер на разных портах.

#### **Запуск `root-config`**
1. Перейдите в папку `root-config`:
   ```bash
   cd root-config
   ```
2. Запустите сервер:
   ```bash
   npm start
   ```
3. Сервер `root-config` запускается на порту `9000` по умолчанию. Это основное приложение, которое связывает все микрофронтенды.

#### **Запуск `profile-microfrontend`**
1. Перейдите в папку `profile-microfrontend`:
   ```bash
   cd profile-microfrontend
   ```
2. Запустите сервер:
   ```bash
   npm start
   ```
3. По умолчанию сервер будет работать на порту `9001`. Этот микрофронтенд отвечает за страницу профиля.

#### **Запуск `gallery-microfrontend`**
1. Перейдите в папку `gallery-microfrontend`:
   ```bash
   cd gallery-microfrontend
   ```
2. Запустите сервер:
   ```bash
   npm start
   ```
3. По умолчанию сервер будет работать на порту `9002`. Этот микрофронтенд отвечает за галерею фотографий.

#### **Запуск `likes-microfrontend`**
1. Перейдите в папку `likes-microfrontend`:
   ```bash
   cd likes-microfrontend
   ```
2. Запустите сервер:
   ```bash
   npm start
   ```
3. По умолчанию сервер будет работать на порту `9003`. Этот микрофронтенд отвечает за управление лайками.

---

### **Шаг 3: Проверка работы приложения**
1. Откройте браузер и перейдите по адресу:
   ```plaintext
   http://localhost:9000
   ```
2. `root-config` загружает все подключённые микрофронтенды.
3. Используйте маршруты для доступа к функционалу:
   - `/profile`: для просмотра и редактирования профиля.
   - `/gallery`: для отображения галереи фотографий.
   - `/likes`: для управления лайками.

---

### **Шаг 4: Тестирование микрофронтендов**
- Убедитесь, что каждый модуль работает корректно независимо:
  - Для профиля (`profile-microfrontend`) проверьте отображение и редактирование информации.
  - Для галереи (`gallery-microfrontend`) проверьте загрузку, удаление и просмотр фотографий.
  - Для лайков (`likes-microfrontend`) проверьте функционал добавления и удаления лайков.

---

### **Шаг 5: Завершение работы**
Чтобы остановить все серверы, нажмите `Ctrl + C` в терминале каждого микрофронтенда.

---



---

### **Итоговая последовательность**
1. Установите зависимости для каждого микрофронтенда.
2. Запустите корневую конфигурацию (`root-config`) на порту 9000.
3. Последовательно запустите `profile-microfrontend` (порт 9001), `gallery-microfrontend` (порт 9002) и `likes-microfrontend` (порт 9003).
4. Проверьте приложение через браузер, убедитесь, что все маршруты работают корректно.

---
2 Задание
---
https://app.diagrams.net/#G1G0OFPcJsZTV9XUjdIAaTOJCDqdUA89s3#%7B%22pageId%22%3A%22qgNA9GUGCHz_yHZ5M3iQ%22%7D
