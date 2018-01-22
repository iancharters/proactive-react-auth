import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';

const RedirectAuthenticated = ({ path, exact, isAuthenticated, component }) => {
  const RouteComponent = component;

  return (
    <Route
      exact={exact}
      path={path}
      render={props => {
        if (isAuthenticated) {
          return <Redirect to={{ pathname: '/' }} />;
        }
        return <RouteComponent {...props} />;
      }}
    />
  );
};

RedirectAuthenticated.defaultProps = {
  exact: false,
};

RedirectAuthenticated.displayName = 'Base/RedirectAuthenticated';

export default RedirectAuthenticated;
