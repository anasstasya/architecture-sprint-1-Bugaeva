// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import { auth } from 'api';
import './index.css'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import * as singleSpa from 'single-spa'

singleSpa.registerApplication({
  name: "signin",
  // @ts-expect-error external import
  app: () => import("mesto/signin"),
  activeWhen: "/signin",
  customProps: {},
});

singleSpa.registerApplication({
  name: "main",
  // @ts-expect-error external import
  app: () => import("mesto/main"),
  activeWhen: (l) => l.pathname === "/",
  customProps: {},
});

document.addEventListener('onSignIn', () => {
  singleSpa.navigateToUrl('/');
});

if (!auth.isAuthorized()) {
  singleSpa.navigateToUrl('/signin');
} else {
  const token = localStorage.getItem("jwt")!;
  auth
    .checkToken(token)
    .catch((err) => {
      localStorage.removeItem("jwt");
      console.log(err);
      singleSpa.navigateToUrl('/signin');
    })
}

singleSpa.start();