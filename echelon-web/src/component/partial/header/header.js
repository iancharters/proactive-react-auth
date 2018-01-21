// =============================================================================
// Import modules.
// =============================================================================
import React from 'react';
import { connect } from 'react-redux';

// =============================================================================
// Import actions.
// =============================================================================
import { logout } from 'action/session';

// =============================================================================
// Import styles.
// =============================================================================
import style from './header.scss';

// =============================================================================
// Import bases.
// =============================================================================
import { Grid } from 'semantic-ui-react';

const Header = ({ currentUser, logout }) => {
  return (
    <div className={style.header}>
      HEADER -> {currentUser.username}
      <div style={{ float: 'right' }}>
        <button onClick={logout}>LOGOUT</button>
      </div>
    </div>
  );
};

Header.defaultProps = {
  currentUser: {
    username: '',
  },
  isAuthenticated: false,
};

Header.displayName = 'Partial/Header';

export default Header;
