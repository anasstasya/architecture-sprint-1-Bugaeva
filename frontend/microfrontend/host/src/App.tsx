import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";  
import { CurrentUserContext } from "./contexts/CurrentUserContext";

import "./index.css";

function App() {

  //В компоненты добавлены новые стейт-переменные: email — в компонент App
  const [email, setEmail] = React.useState("");    
  // В корневом компоненте App создана стейт-переменная currentUser. Она используется в качестве значения для провайдера контекста.
  const [currentUser, setCurrentUser] = React.useState({}); 

  function onSignOut() {
    console.log("onSignOut"); 
  } 

  return (
    // В компонент App внедрён контекст через CurrentUserContext.Provider
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__content">
        <Header email={email} onSignOut={onSignOut} />
        
        <Footer />
        
      </div>
    </CurrentUserContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
