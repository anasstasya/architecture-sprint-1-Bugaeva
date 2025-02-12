import React from 'react';
import { useLocation } from 'react-router-dom';
import * as authApiClient from "../utils/auth-api-client.js";

const JwtValidateWrapper = ({component: Component, jwt, ...props}) => {

  const location = useLocation();

  React.useEffect(() => {
    if (!jwt) {
      return;
    }
    authApiClient
      .checkToken(jwt)
      .then((data) => {
      })
      .catch((err) => {
        dispatchEvent(new CustomEvent("jwt-validate-faulted", {
          detail: { error: err }
        }));
      });
  }, [location.pathname]);

  return (<Component {...props}/>)
}

export default JwtValidateWrapper;