// =============================================================================
// Import modules.
// =============================================================================
import React from 'react';

const Content = ({ component, props }) => {
  const Component = component;

  return (
    <div style={{ marginTop: '7em' }}>
      <Component {...props} />
    </div>
  );
};

Content.displayName = 'Util/Content';

export default Content;
