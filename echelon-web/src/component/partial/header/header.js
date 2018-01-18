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

const Header = ({ isAuthenticated, currentUser }) => {
  const visibility = isAuthenticated
    ? { display: 'block' }
    : { display: 'none' };

  return (
    <div className={style.header} style={visibility}>
      HEADER -> {currentUser.username}
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
