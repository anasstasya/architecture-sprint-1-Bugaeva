import React from 'react';
import { Route, useHistory, Switch } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import InfoTooltip from './InfoTooltip';
import ProtectedRoute from './ProtectedRoute';
import * as auth from '../util/auth.js';
import '../index.css';

function AuthPane({ onLoggedIn, mainPath, mainComponent, ...props }) {
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);
  const [tooltipStatus, setTooltipStatus] = React.useState("");

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const history = useHistory();

  // это функция зовётся, когда пользователь залогинен
  function handleLoggedIn(email) {
    setIsLoggedIn(true);
    onLoggedIn({email});
    history.push(mainPath);
  }
  
  // при монтировании App описан эффект, проверяющий наличие токена и его валидности
  React.useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      auth
      .checkToken(token)
      .then((res) => {
        handleLoggedIn(res.data.email);
      })
      .catch((err) => {
        localStorage.removeItem("jwt");
        console.log(err);
      });
    }
  }, [history]);

  function closeAllPopups() {
    setIsInfoToolTipOpen(false);
  }

  function onRegister({ email, password }) {
    auth
      .register(email, password)
      .then((res) => {
        setTooltipStatus("success");
        setIsInfoToolTipOpen(true);
        history.push("/signin");
      })
      .catch((err) => {
        setTooltipStatus("fail");
        setIsInfoToolTipOpen(true);
      });
  }

  function onLogin({ email, password }) {
    auth
      .login(email, password)
      .then((res) => {
        handleLoggedIn(email);
      })
      .catch((err) => {
        setTooltipStatus("fail");
        setIsInfoToolTipOpen(true);
      });
  }

  function onSignOut() {
    // при вызове обработчика onSignOut происходит удаление jwt
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    // После успешного вызова обработчика onSignOut происходит редирект на /signin
    history.push("/signin");
  }

  React.useEffect(() => {
    addEventListener("_auth-sign-out-request", onSignOut);
    return () => removeEventListener("_auth-sign-out-request", onSignOut);
  }, []);

  return (
    <>
      <Switch>
        <ProtectedRoute
          exact
          path={mainPath}
          signInPath="/signin"
          component={mainComponent}
          loggedIn={isLoggedIn}
          {...props}
        />
        <Route path="/signup">
          <Register onRegister={onRegister} />
        </Route>
        <Route path="/signin">
          <Login onLogin={onLogin} />
        </Route>
      </Switch>
      <InfoTooltip
        isOpen={isInfoToolTipOpen}
        onClose={closeAllPopups}
        status={tooltipStatus}
      />
    </>
  )
}

export default AuthPane;
