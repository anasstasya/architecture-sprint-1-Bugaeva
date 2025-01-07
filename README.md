##Выбранный подход: Module Federation
Было принято решение использовать *Webpack Module Federation* из-за следующих преимуществ:
-Позволяет независимую разработку отдельных частей приложения разными командами.
-Предоставляет возможность динамической загрузки и обмена модулями между микрофронтендами.
-Легко интегрируется с рассматсриваемым проектом на React.

##Структура проекта

    

/host

    /src
        /components
            Header.js - Хедер страницы
            Footer.js - Футер страницы
            ProtectedRoute.js - Компонент маршрутизации
            Main.js – Главный компонент для отображения профиля и карточек
        /styles
            content - Стили для контента страницы
            header - Стили для компонента хидера
            footer - Стили для компонента футера
            page - Стили для страницы
        index.js - Точка входа хостового приложения
    package.json - Зависимости и скрипты микрофронтенда
    webpack.config.js - Конфиг для сборки с помощью webpack

/auth
	/src
		/components
            Login.js – Компонент входа пользователя
            Register.js – Компонент регистрации пользователя
		    InfoTooltip.js - компонент для вывода сообщений о статусе регистрации/входа.
        /styles
            login.css – Стили для компонента входа
            auth-form.css – Стили для компонента регистрации
        /utils
            auth.js – Утилиты для аутентификации
        index.js – Точка входа микрофронтенда
    package.json – Зависимости и скрипты микрофронтенда
    webpack.config.js - Конфиг для сборки с помощью webpack

/profile
    /src
        /components
            EditProfilePopup.js – Компонент для редактирования профиля
            EditAvatarPopup.js – Компонент для обновления аватара
        /styles
            profile.css – Стили для компонента профиля
        index.js – Точка входа микрофронтенда
    package.json – Зависимости и скрипты микрофронтенда
    webpack.config.js - Конфиг для сборки с помощью webpack

/cards
    /src
        /components
            Card.js – Компонент для отображения карточки
            AddPlacePopup.js – Компонент для добавления новой карточки
            ImagePopup.js – Компонент для отображения увеличенной карточки
        /utils
            api.js – Утилиты для работы с API карточек
        /styles
            card.css – Стили для карточек
            popup.css – Стили для всплывающих окон
		    places.css - Стили карточек
        index.js – Точка входа микрофронтенда
    package.json – Зависимости и скрипты микрофронтенда
    webpack.config.js

##Ссылка на схему второго задания:

https://drive.google.com/file/d/1IBSTM9PC7sZZXUKRurK74FgXLLx2J-NW/view?usp=sharing


