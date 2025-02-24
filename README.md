Описание проекта
Представляет собой веб-приложение, разработанное с использованием микрофронтендов.

Основные функции микрофронтендов:
auth-microfrontend:
-вход
-регистрация пользователей
profile-microfrontend:
-редактирование имени, описания, аватара
-просмотр информации о пользователе
cards-microfrontend:
-добавление, редактирование, удаление карточек
-возможность ставить и снимать лайки
main-microfrontend:
-отображание карточек и профиля пользователя
-навигация между разделами приложения

Для объединения микрофронтендов в единое приложение используется фреймворк Module Federation из Webpack. Это позволяет загружать части приложения динамически.

Компоненты:
auth-microfrontend:
-Login
-Register
profile-microfrontend:
-EditProfilePopup
-EditAvatarPopup
cards-microfrontend:
-Card
-AddPlacePopup
-ImagePopup
main-microfrontend:
-Header
-Footer
-Main

Модули:
Api: Сервис для взаимодействия с бэкендом.
Context: Контекст React для передачи данных между компонентами.
Router: Маршрутизация между микрофронтендами.

Обоснование:
Монолитный фронтенд был разделен на следующие микрофронтенды согласно бизнес-функциям:

-auth-microfrontend: Авторизация и регистрация.
-profile-microfrontend: Профиль пользователя.
-cards-microfrontend: Карточки и взаимодействие с ними.
-main-microfrontend: Главная страница и навигация.

Module Federation был выбран, потому что он:
Упрощает разработку: Позволяет разрабатывать и тестировать микрофронтенды независимо.
Улучшает производительность: Динамическая загрузка модулей и общие зависимости уменьшают размер бандла.
Обеспечивает гибкость: Позволяет легко добавлять новые функции и изменять существующие.
Поддерживает legacy-код: Позволяет постепенно мигрировать старый код в микрофронтенды.
Интегрируется с существующими инструментами: Работает с Webpack и другими популярными инструментами.
