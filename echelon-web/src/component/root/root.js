// =============================================================================
// Import modules.
// =============================================================================
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// =============================================================================
// Import actions
// =============================================================================
import { authenticate, unauthenticate } from 'action/session';

// =============================================================================
// Import components.
// =============================================================================
import Footer from 'component/partial/footer';
import Header from 'component/partial/header';
import Home from 'component/view/home';
import Login from 'component/partial/login';
import MatchAuthenticated from 'component/base/match-authenticated';
import NotFound from 'component/partial/not-found';
import RedirectAuthenticated from 'component/base/redirect-authenticated';
import Signup from 'component/partial/signup';

class Root extends Component {
  componentDidMount() {
    // const token = localStorage.getItem('token');
    //
    // if (token) {
    //   this.props.authenticate();
    // } else {
    //   this.props.unauthenticate();
    // }
  }

  render() {
    // const { isAuthenticated, willAuthenticate } = this.props;

    const isAuthenticated = false;
    const willAuthenticate = false;

    const authProps = {
      isAuthenticated,
      willAuthenticate,
    };

    return (
      <div>
        <Header isAuthenticated={isAuthenticated} />
        <Router>
          <Switch>
            <MatchAuthenticated exact path="/" component={Home} {...authProps} />
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
        <Footer isAuthenticated={isAuthenticated} />
      </div>
    );
  }
}
Root.displayName = 'Root';

const mapDispatchToProps = dispatch => ({
  dispatch,
  authenticate: () => dispatch(authenticate()),
  unauthenticate: () => dispatch(unauthenticate()),
});

const mapStateProps = state => ({
  // isAuthenticated: state.session.isAuthenticated,
  // willAuthenticate: state.session.willAuthenticate,
  // currentUser: state.session.currentUser,
});

export default connect(mapStateProps, mapDispatchToProps)(Root);
// export default Root;
