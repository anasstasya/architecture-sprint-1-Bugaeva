import React, { lazy } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { CurrentUserContext } from "shared-library";

const AuthPane = lazy(() => import('auth/AuthPane').catch(() => {
  return { default: () => <div className="error">AuthPane component is not available</div> };
}));

function App() {

  // В корневом компоненте App создана стейт-переменная currentUser. Она используется в качестве значения для провайдера контекста.
  const [currentUser, setCurrentUser] = React.useState({});
  function handleUserUpdate(e) {
    setCurrentUser(e.detail);
  }
  React.useEffect(() => {
    addEventListener("user-update", handleUserUpdate);
    return () => removeEventListener("user-update", handleUserUpdate);
  }, []);

  //В компоненты добавлены новые стейт-переменные: email — в компонент App
  const [email, setEmail] = React.useState("");

  function handleLoggedIn({email}) {
    setEmail(email);
  }

  return (
    // В компонент App внедрён контекст через CurrentUserContext.Provider
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__content">
        <Header email={email} mainPath="/" />
        <AuthPane
          mainPath="/"
          mainComponent={Main}
          onLoggedIn={handleLoggedIn}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
