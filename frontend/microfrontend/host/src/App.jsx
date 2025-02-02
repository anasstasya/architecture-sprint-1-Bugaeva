import React, { lazy, Suspense, useState, useEffect }  from "react";
import { Route, useHistory, Switch } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import logoPath from '../public/logo.svg';


const UserLogin = lazy(
  () => import('user/Login').catch(() => {
    return {default: () => <div className="error">Component 'UserLogin' is not available!1</div>};
  })
);

const UserLogout = lazy(
  () => import('user/Logout').catch(() => {
    return {default: () => <div className="error">Component 'UserLogout' is not available!1</div>};
  })
);


const UserProfile  = lazy(
  () => import('user/Profile').catch(() => {
    return {default: () => <div className="error">Component 'UserProfile' is not available!</div>};
  })
);

const GalleryCards  = lazy(
  () => import('gallery/Card').catch(() => {
    return {default: () => <div className="error">Component 'GalleryCards' is not available!</div>};
  })
);

const GalleryCardList  = lazy(
  () => import('gallery/CardList').catch(() => {
    return {default: () => <div className="error">Component 'GalleryCardList' is not available!</div>};
  })
);

const UtilsMessage  = lazy(
  () => import('utils/Message').catch(() => {
    return {default: () => <div className="error">Component 'UtilsMessage' is not available!</div>};
  })
);

const UtilsError  = lazy(
  () => import('utils/Error').catch(() => {
    return {default: () => <div className="error">Component 'UtilsError' is not available!</div>};
  })
);


const App = () => {

}

export default App;
