import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ signInPath, component: Component, ...props  }) => {
  return (
    <Route exact>
      {
        () => props.loggedIn ? <Component {...props} /> : <Redirect to={signInPath} />
      }
    </Route>
)}

export default ProtectedRoute;
