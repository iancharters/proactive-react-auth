// =============================================================================
// Import modules.
// =============================================================================
import React from 'react';
import { Route, Redirect } from 'react-router';

// =============================================================================
// Import utility components.
// =============================================================================
import Content from 'component/util/content';

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
          return <Content component={component} props={props} />;
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
