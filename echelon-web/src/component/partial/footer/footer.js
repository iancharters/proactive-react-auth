// =============================================================================
// Import modules.
// =============================================================================
import React from 'react';
import { connect } from 'react-redux';

// =============================================================================
// Import styles.
// =============================================================================
import style from './footer.scss';

const Footer = () => {
  return (
    <div className={style.footer}>
      FOOTER
    </div>
  );
};

Footer.defaultProps = {
  isAuthenticated: false,
};

Footer.displayName = 'Partial/Footer';

export default Footer;
