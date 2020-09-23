import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthenticationContext } from './AuthenticationContext';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export const PrivateRoute = ({ children, ...rest }) => {
  return (
    <AuthenticationContext.Consumer>
      {(auth) => (
        <Route
          {...rest}
          render={({ location }) =>
            auth.isAuthenticated ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: '/signin',
                  state: { from: location },
                }}
              />
            )
          }
        />
      )}
    </AuthenticationContext.Consumer>
  );
};

export default PrivateRoute;
