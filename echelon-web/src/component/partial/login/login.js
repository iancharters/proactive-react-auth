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
<div className={style.login}>
  <div className={style.container}>
    <LoginForm />
  </div>
</div>;

Login.displayName = 'Partial/Login';

export default Login;
