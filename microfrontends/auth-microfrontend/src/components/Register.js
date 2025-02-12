import React from "react";
import RegisterForm from "./RegisterForm.js";
import * as authApiClient from "../utils/auth-api-client.js";

function Register() {

  function onRegister({ email, password }) {
    authApiClient
      .register(email, password)
      .then((res) => {
        dispatchEvent(new CustomEvent("user-registered"));
      })
      .catch((err) => {
        dispatchEvent(new CustomEvent("request-faulted", {
          detail: { error: err }
        }));
      });
  }

  return (
    <RegisterForm onRegister={onRegister} />
  );
}

export default Register;
