// =============================================================================
// Import modules.
// =============================================================================
import React from 'react';

// =============================================================================
// Import components.
// =============================================================================
import LoginForm from './login-form';

const Login = () =>
<div className="login">
  <div className="container">
    <LoginForm />
  </div>
</div>;

Login.displayName = 'Partial/Login';

export default Login;
