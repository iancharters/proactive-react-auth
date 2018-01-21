// =============================================================================
// Import modules.
// =============================================================================
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// =============================================================================
// Import actions
// =============================================================================
import { authenticate, unauthenticate, logout } from 'action/session';

// =============================================================================
// Import bases.
// =============================================================================
import { Grid } from 'semantic-ui-react';

// =============================================================================
// Import partials.
// =============================================================================
import Footer from 'component/partial/footer';
import Header from 'component/partial/header';
import Login from 'component/partial/login';
import NotFound from 'component/partial/not-found';
import Signup from 'component/partial/signup';

// =============================================================================
// Import utils.
// =============================================================================
import MatchAuthenticated from 'component/util/match-authenticated';
import RedirectAuthenticated from 'component/util/redirect-authenticated';

// =============================================================================
// Import views.
// =============================================================================
import Home from 'component/view/home';

class Root extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');

    token ? this.props.authenticate() : this.props.unauthenticate();
  }

  render() {
    const { isAuthenticated, willAuthenticate } = this.props;

    const authProps = {
      isAuthenticated,
      willAuthenticate,
    };

    return (
      <div style={{ width: '100%' }}>
        {isAuthenticated ? (
          <Header
            isAuthenticated={isAuthenticated}
            currentUser={this.props.currentUser}
            logout={this.props.logout}
          />
        ) : null}
        <Router>
          <Switch>
            <MatchAuthenticated
              exact
              path="/"
              component={Home}
              {...authProps}
            />
            <RedirectAuthenticated
              path="/signup"
              component={Signup}
              {...authProps}
            />
            <RedirectAuthenticated
              path="/login"
              component={Login}
              {...authProps}
            />
            <Route component={NotFound} />
          </Switch>
        </Router>
        {isAuthenticated ? <Footer isAuthenticated={isAuthenticated} /> : null}
      </div>
    );
  }
}

Root.displayName = 'Root';

const mapDispatchToProps = dispatch => ({
  dispatch,
  authenticate: () => dispatch(authenticate()),
  unauthenticate: () => dispatch(unauthenticate()),
  logout: () => dispatch(logout()),
});

const mapStateProps = state => ({
  isAuthenticated: state.session.isAuthenticated,
  willAuthenticate: state.session.willAuthenticate,
  currentUser: state.session.currentUser,
});

export default connect(mapStateProps, mapDispatchToProps)(Root);
