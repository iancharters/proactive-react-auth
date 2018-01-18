// =============================================================================
// Import modules.
// =============================================================================
import React from 'react';
import { connect } from 'react-redux';

// =============================================================================
// Import styles.
// =============================================================================
import style from './footer.scss';

const Footer = ({isAuthenticated}) => {
  const visibility = isAuthenticated
    ? { display: 'block' }
    : { display: 'none' };

  return (
    <div className={style.footer} style={visibility}>
      FOOTER
    </div>
  );
};

Footer.defaultProps = {
  isAuthenticated: false,
};

Footer.displayName = 'Partial/Footer';

export default Footer;
