// =============================================================================
// Import modules.
// =============================================================================
import React from 'react';

// =============================================================================
// Import partials.
// =============================================================================
import SignupForm from './signup-form';

// =============================================================================
// Import CSS.
// =============================================================================
import style from './signup.scss';

const Signup = () => (
  <div className={style.outer}>
    <div className={style.middle}>
      <div className={style.inner}>
        <SignupForm />
      </div>
    </div>
  </div>
);

Signup.displayName = 'Partial/Signup';

export default Signup;
