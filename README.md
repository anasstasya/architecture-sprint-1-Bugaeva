# Site Maestro. Micro-frontend splitting.

## Project analyze. Frontend
### Project structure
The project contains frontend and backend parts.
Each of the parts contains their own Dockerfile.
Maestro site uses mongodb database.
The application can be built easily using docker compose.

The application has written using React framework, it has tests.
There is a special test that checks *microfrontend*  pattern in the project.
`src` folder contains following key folders:
   - `blocks`: css styles for the project
   - `components`: dynamic components
   - `contexts`: exporting context
   - `images`: folder contains images that will be used in the site
   - `utils`: folder contains api for communicating with backend and auth scripts
   - `vendor`: folder with fonts and their styles

### Components
Project components can be split by their functionality:
- `base site scructure`
- `popups`
- `images management components`
- `profile management components`
- `register and authentication components`
Separately can be distinguished App.js file as a main application event handler.

### Routes and api
- `auth`
  - `register`
  - `login`
  - `getToken`
- `cards`
  - `getCardList`
  - `addCard`
  - `removeCard`
- `user`
  - `getUserInfo`
  - `setUserInfo`
  - `setUserAvatar`
- `likes`
  - `changeLikeCardStatus`

### Dependencies
React libraries are mainly used. Also, it is added a library for metrics.

### Styles
Styles are presented as well organized css files inside of `blocks` folder

## Conclusion
Based on analyze following parts can be distinguished:
- `users` (profiles and auth)
- `cards` (images and  metrics)
In my opinion, metrics that calculates likes could be defined in a separate module. 
But as I see, it does not have a separate component. 
Therefore, I think the metrics functionality can be included into `cards` block because it logically depends on it.
And maybe, in further development of the project, it can be separated to a dedicated `metrics` module.

## 2. Changes Planning
I see that the project contains pretty simple logic and can be united using the ModuleFederation pattern.
My choice based on idea of vertical splitting and one framework I have not a lot of experience with frontend tech stack.
I distinguish between local and remote modules. Local module are regular modules that are part of the current build.
It can contain main components like Header, Main, Footer. It will be host in the ModuleFederation pattern
Remote modules are modules that are not part of the current build but are loaded at runtime from a remote container.
These are Profile and Image management as a dynamic remote containers.

### SiteManagement micro-frontend (host)
```aiignore
/public
  - favicon.ico
  - index.html
  - logo192.png
  - logo512.png
  - manifest.json
  - robots.txt
/src
  /components 
    - Header.js
    - Footer.js
    - Main.js
  /styles
    - header
    - footer
    - content
    - page
    - popup
  /utils
    - api.js
  /context
    - CurrentUserContext.js
  /images
  /vendor
  App.jsx
  index.js
  index.html
  index.css
package.json
webpack.config.js
serviceWorker.js
setupTests.js
```

### UserManagement micro-frontend (users)
```aiignore
/src
  /components
    - Login.js
    - Register.js
    - ProtectedRoute.js
    - InfoTooltip.js
    - EditAvatarPopup.js
    - EditProfilePopup.js
  /styles
    - login
    - auth-form
    - profile
  /utils
    - api.js
    - auth.js
  App.jsx
  index.js
  index.html
  index.css
package.json
webpack.config.js
```

### ImageManagement micro-frontend (cards)
```aiignore
/src
  /components
    - Card.js
    - AddPlacePopup.js
    - ImagePopup.js
    - PopupWithForm.js
  /styles
    - places
    - card
  /utils
    - api.js
  App.jsx
  index.js
  index.html
  index.css
package.json
webpack.config.js
```

- App.js - will be split by micro-frontends


### I have split the frontend to micro-frontend only logically, but have not built them because I don't have enough knowledge in frontend tech stack.

# Link to task 2
https://drive.google.com/file/d/1ZTnB5xbSjYqRmk0AmVPQm9kypUH1pHlC/view?usp=sharing