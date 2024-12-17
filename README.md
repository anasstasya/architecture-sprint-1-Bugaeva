Выбором фреймворка для микрофронтендов станет Webpack Module Federation. Для этого несколько причин:

- в этом приложении будет разумно использовать общие компоненты в приложении 
- нам не нужны возможности single spa в использовании разных фреймворков, т.к. нет планов использовать  другие фреймворки  в приложении
- нам подходит build time компоновка

```
.

├── auth // микрофронтенд, отвечающий за авторизацию

│   ├── blocks

│   │   ├── auth-form // стили микрофронтенда

│   │   └── login

│   └── components

│   ├── InfoTooltip.js // окна логина и регистрации и попап с сообщением об успешной авторизации

│   ├── Login.js

│   └── Register.js

│   └── utils // код обращения к бэку для авторизации

│   ├── api.js

├── host // микрофронтенд, выступает в роли хоста для остальных микрофреймворков

│   ├── blocks

│   │   ├── footer

│   │   ├── header

│   │   └── page

│   ├── components // вынесли компоненты, которые не подходят под определение конкретной доменной области

│   │   ├── App.js.    // файл отвечает за маршрутизацию. Нужно будет его настроить для использования с микрофронтендами

│   │   ├── Footer.js

│   │   ├── Header.js

│   │   └── ProtectedRoute.js

│   ├── contexts

│   │   └── CurrentUserContext.js

│   ├── images

│   │   └── logo.svg

│   ├── public

│   │   ├── favicon.ico

│   │   ├── index.html

│   │   ├── logo192.png

│   │   ├── logo512.png

│   │   ├── manifest.json

│   │   └── robots.txt

│   └── utils

│   ├── api.js // в файле находит логика для всех наших микрофронтендов. В текущем состоянии я бы использовал его как shared dependency. По мере развития

// приложения можно разбить файл на составляющие.

├── photos // микрофронтенд, отвечающий за отображение картинок на странице

│   ├── blocks

│   │   ├── card

│   │   ├── places

│   │   └── popup

│   ├── components // компоненты, связанные с добавлением и изменением картинок

│   │   ├── AddPlacePopup.js

│   │   ├── ImagePopup.js

│   │   └── PopupWithForm.js

│   │   └── Card.js

│   └── images

│   ├── add-icon.svg

│   ├── card_1.jpg

│   ├── card_2.jpg

│   ├── card_3.jpg

│   ├── close.svg

│   ├── like-active.svg

│   └── like-inactive.svg

│   ├── like-active.svg

│   └── like-inactive.svg

└── profile // микрофронтенд, отвечающий за профиль пользователя. Редактирование аватарки и информации о себе.

├── blocks

│   └── profile

├── components

│   ├── EditAvatarPopup.js

│   └── EditProfilePopup.js

└── images

├── avatar.jpg

├── edit-icon.svg

├── error-icon.svg

└── success-icon.svg

```