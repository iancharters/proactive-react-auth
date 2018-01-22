// =============================================================================
// Import modules.
// =============================================================================
import React from 'react';

// =============================================================================
// Import components.
// =============================================================================
import { Container, Header } from 'semantic-ui-react';

const Home = () => {
  return (
    <div>
      <Container text>
        <Header as="h1">Semantic UI React Fixed Template</Header>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>
          A text container is used for the main container, which is useful for
          single column layouts.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Container>
    </div>
  );
};

Home.displayName = 'View/Home';

export default Home;
