import { Route, Link } from 'react-router-dom';
import '../blocks/auth.css';


function AuthRoutes({email, mainPath}) {

  function handleSignOut() {
    dispatchEvent(new CustomEvent("_auth-sign-out-request"));
  }

  return (
    <>
      <Route exact path={mainPath}>
        <div className="auth-wrapper">
          <p className="auth-user">{ email }</p>
          <button className="auth-logout" onClick={handleSignOut}>Выйти</button>
        </div>
      </Route>
      <Route path="/signup">
        <Link className="auth-link" to="signin">Войти</Link>
      </Route>
      <Route path="/signin">
        <Link className="auth-link" to="signup">Регистрация</Link>
      </Route>
    </>
  );
}

export default AuthRoutes;
