// =============================================================================
// Import modules.
// =============================================================================
import React from 'react';

// =============================================================================
// Import components.
// =============================================================================
import LoginForm from './login-form';

// =============================================================================
// Import SCSS.
// =============================================================================
import style from './login.scss';

const Login = () =>
<div className={style.outer}>
  <div className={style.middle}>
    <div className={style.inner}>
      <LoginForm />
    </div>
  </div>
</div>;

Login.displayName = 'Partial/Login';

export default Login;
