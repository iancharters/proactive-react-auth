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
// Import images.
// =============================================================================
import Logo from 'asset/image/logo.png';
// =============================================================================
// Import bases.
// =============================================================================
import { Container, Grid, Image, Menu } from 'semantic-ui-react';

const Header = ({ currentUser, logout }) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          <Image size="mini" src={Logo} style={{ marginRight: '1.5em' }} />
          Proactive
        </Menu.Item>
        <Menu.Item as="a">Top</Menu.Item>
        <Menu.Item as="a">Section 1</Menu.Item>
        <Menu.Item as="a">Section 2</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>Welcome, {currentUser.username}.</Menu.Item>
          <Menu.Item as="a" onClick={logout}>
            Logout
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

Header.defaultProps = {
  currentUser: {
    username: '',
  },
};

Header.displayName = 'Partial/Header';

export default Header;
