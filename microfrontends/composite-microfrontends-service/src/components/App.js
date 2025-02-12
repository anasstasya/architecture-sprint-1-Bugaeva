import React, { lazy, Suspense } from 'react';
import { Route, useHistory, Switch, Redirect } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Login = lazy(() => import('auth_microfrontend/Login').catch(() => {
  return { default: () => <div className="error">Login is not available.</div> };
}));

const Register = lazy(() => import('auth_microfrontend/Register').catch(() => {
  return { default: () => <div className="error">Register is not available.</div> };
}));

const JwtValidateWrapper = lazy(() => import('auth_microfrontend/JwtValidateWrapper').catch(() => {
  return { default: () => <div className="error">JwtValidateWrapper is not available.</div> };
}));

const InfoTooltip = lazy(() => import('common_components/InfoTooltip').catch(() => {
  return { default: () => <div className="error">InfoTooltip is not available.</div> };
}));

function App({}) {

  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);
  const [isInfoToolTipSuccess, setIsInfoToolTipSuccess] = React.useState(false);
  const [infoToolTipMessage, setInfoToolTipMessage] = React.useState(false);

  const [jwt, setJwt] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState("");

  const [currentUser, setCurrentUser] = React.useState(null);

  const history = useHistory();

  React.useEffect(() => {
    addEventListener("user-logged-in", handleUserLoggedInEvent);
    addEventListener("user-registered", handleUserRegisteredEvent);
    addEventListener("request-faulted", handleRequestFailedEvent);
    addEventListener("jwt-validate-faulted", handleJwtValidateFaultedEvent);
    addEventListener("current-user-loaded", handleUserChangedEvent);
    addEventListener("current-user-updated", handleUserChangedEvent);
    addEventListener("current-user-avatar-updated", handleUserChangedEvent);
    return () => {
      removeEventListener("user-logged-in", handleUserLoggedInEvent);
      removeEventListener("user-registered", handleUserRegisteredEvent);
      removeEventListener("request-faulted", handleRequestFailedEvent);
      removeEventListener("jwt-validate-faulted", handleJwtValidateFaultedEvent);
      removeEventListener("current-user-loaded", handleUserChangedEvent);
      removeEventListener("current-user-updated", handleUserChangedEvent);
      removeEventListener("current-user-avatar-updated", handleUserChangedEvent);
    }
  }, []);

  const handleUserLoggedInEvent = event => {
    setJwt(event.detail.jwt);
    setEmail(event.detail.email);
    setIsLoggedIn(true);
    history.push("/");
  }

  const handleUserRegisteredEvent = event => {
    setIsInfoToolTipSuccess(true);
    setInfoToolTipMessage("Вы успешно зарегистрировались");
    setIsInfoToolTipOpen(true);
    history.push("/signin");
  }

  const handleJwtValidateFaultedEvent = event => {
    setIsLoggedIn(false);
    setEmail("");
    setJwt("");
    console.log(event.detail.error);
  }

  const handleUserChangedEvent = event => {
    setCurrentUser({ ...event.detail.currentUser});
  }

  const handleRequestFailedEvent = event => {
    setIsInfoToolTipSuccess(false);
    setInfoToolTipMessage("Что-то пошло не так! Попробуйте ещё раз.");
    setIsInfoToolTipOpen(true);
    console.log(event.detail.error);
  }

  const onSignOut = () => {
    // при вызове обработчика onSignOut происходит удаление jwt
    setJwt("");
    setIsLoggedIn(false);
    // После успешного вызова обработчика onSignOut происходит редирект на /signin
    history.push("/signin");
  }

  function closeAllPopups() {
    setIsInfoToolTipOpen(false);
  }

  return (
    <div className="page__content">
      <Header email={email} onSignOut={onSignOut} />
      <Switch>
        <Route exact path="/" >
          { isLoggedIn ? <Suspense fallback={<div>Загрузка...</div>}><JwtValidateWrapper component={Main} jwt={jwt} currentUser={currentUser} /></Suspense> : <Redirect to="./signin" />}
        </Route>
        <Route path="/signup">
          <Suspense fallback={<div>Загрузка...</div>}><JwtValidateWrapper component={Register} jwt={jwt} /></Suspense>
        </Route>
        <Route path="/signin">
          <Suspense fallback={<div>Загрузка...</div>}><JwtValidateWrapper component={Login} jwt={jwt} /></Suspense>
        </Route>
      </Switch>
      <Footer />
      <Suspense fallback={<div>Загрузка...</div>}>
        <InfoTooltip
          isOpen={isInfoToolTipOpen}
          onClose={closeAllPopups}
          isSuccess={isInfoToolTipSuccess}
          infoMessage={infoToolTipMessage}
        />
      </Suspense>
    </div>
  );
}

export default App;
