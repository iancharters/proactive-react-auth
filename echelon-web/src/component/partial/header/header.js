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

const Header = ({isAuthenticated}) => {
  const visibility = isAuthenticated
    ? { display: 'block' }
    : { display: 'none' };

  return (
    <div className={style.header}  style={visibility}>
      HEADER
    </div>
  );
};

Header.defaultProps = {
  username: '',
  isAuthenticated: false,
};

Header.displayName = 'Partial/Header';

export default Header;
