// =============================================================================
// Import modules.
// =============================================================================
import React from 'react';
import { connect } from 'react-redux';

// =============================================================================
// Import styles.
// =============================================================================
import style from './header.scss';

const Header = ({isAuthenticated}) => {

  return (
    <div className={style.header}>
      HEADER
    </div>
  );
};

Header.displayName = 'Partial/Header';

export default Header;
