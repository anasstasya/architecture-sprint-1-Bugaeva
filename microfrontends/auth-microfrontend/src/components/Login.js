import React from "react";
import LoginForm from "./LoginForm.js";
import * as authApiClient from "../utils/auth-api-client.js";

function Login() {

  function onLogin({ email, password }) {
    authApiClient
      .login(email, password)
      .then((data) => {
        dispatchEvent(new CustomEvent("user-logged-in", {
          detail: {
            email: email,
            jwt: data.token
          }
        }))
      })
      .catch((err) => {
        dispatchEvent(new CustomEvent("request-faulted", {
          detail: { error: err }
        }));
      });
  }

  return (
    <LoginForm onLogin={onLogin} />
  );
}

export default Login;
