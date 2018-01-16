import React from 'react';
import { Route, Redirect } from 'react-router';

const MatchAuthenticated = ({
  path,
  exact,
  isAuthenticated,
  willAuthenticate,
  component,
}) => {
  const RouteComponent = component;

  return (
    <Route
      exact={exact}
      path={path}
      render={props => {
        if (isAuthenticated) {
          return <RouteComponent {...props} />;
        }
        if (willAuthenticate) {
          return null;
        }
        if (!willAuthenticate && !isAuthenticated) {
          return <Redirect to={{ pathname: '/login' }} />;
        }
        return null;
      }}
    />
  );
};

MatchAuthenticated.defaultProps = {
  exact: false,
};

MatchAuthenticated.displayName = 'Base/MatchAuthenticated';

export default MatchAuthenticated;
