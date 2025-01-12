import React from "react";
import {Route, Switch, useHistory} from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import Register from "./Register";
import Login from "./Login";
import InfoTooltip from "./InfoTooltip";
import ProtectedRoute from "./ProtectedRoute";
import * as auth from "../utils/auth.js";

function App() {
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [cards, setCards] = React.useState([]);

    // В корневом компоненте App создана стейт-переменная currentUser. Она используется в качестве значения для провайдера контекста.
    const [currentUser, setCurrentUser] = React.useState({});

    const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);
    const [tooltipStatus, setTooltipStatus] = React.useState("");

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    //В компоненты добавлены новые стейт-переменные: email — в компонент App
    const [email, setEmail] = React.useState("");

    const history = useHistory();

    // Запрос к API за информацией о пользователе и массиве карточек выполняется единожды, при монтировании.
    React.useEffect(() => {
        api
            .getAppInfo()
            .then(([cardData, userData]) => {
                setCurrentUser(userData);
                setCards(cardData);
            })
            .catch((err) => console.log(err));
    }, []);

    // при монтировании App описан эффект, проверяющий наличие токена и его валидности
    React.useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (token) {
            auth
                .checkToken(token)
                .then((res) => {
                    setEmail(res.data.email);
                    setIsLoggedIn(true);
                    history.push("/");
                })
                .catch((err) => {
                    localStorage.removeItem("jwt");
                    console.log(err);
                });
        }
    }, [history]);

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsInfoToolTipOpen(false);
        setSelectedCard(null);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function handleOnRegister({email, password}) {
        setTooltipStatus("success");
        setIsInfoToolTipOpen(true);
        history.push("/signin");
    }

    function handleOnRegisterFail() {

        setTooltipStatus("fail");
        setIsInfoToolTipOpen(true);
    }

    function handleOnLogin({email, password}) {
        setIsLoggedIn(true);
        setEmail(email);
        history.push("/");
    }

    function handleOnLoginFail() {
        setTooltipStatus("fail");
        setIsInfoToolTipOpen(true);
    }

    function onSignOut() {
        // при вызове обработчика onSignOut происходит удаление jwt
        localStorage.removeItem("jwt");
        setIsLoggedIn(false);
        // После успешного вызова обработчика onSignOut происходит редирект на /signin
        history.push("/signin");
    }

    return (
        // В компонент App внедрён контекст через CurrentUserContext.Provider
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page__content">
                <Header email={email} onSignOut={onSignOut}/>
                <Switch>
                    <ProtectedRoute
                        exact
                        path="/"
                        component={Main}
                        cards={cards}
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onEditAvatar={handleEditAvatarClick}
                        onCardClick={handleCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                        loggedIn={isLoggedIn}
                    />
                    <Route path="/signup">
                        <Register onRegister={onRegister}/>
                    </Route>
                    <Route path="/signin">
                        <Login onLogin={onLogin}/>
                    </Route>
                </Switch>
                <Footer/>
                <InfoTooltip
                    isOpen={isInfoToolTipOpen}
                    onClose={closeAllPopups}
                    status={tooltipStatus}
                />
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;