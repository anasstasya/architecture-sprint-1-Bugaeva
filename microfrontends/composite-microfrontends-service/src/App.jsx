import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from './components/App';

import "./index.css";
const MainApp = () => (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
);

ReactDOM.render(
    <MainApp />,
document.getElementById('app'));