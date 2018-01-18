// =============================================================================
// Import modules.
// =============================================================================
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// =============================================================================
// Import actions.
// =============================================================================
import { login } from 'action/session';

// =============================================================================
// Import components.
// =============================================================================
import FormInput from 'component/base/form-input';

// =============================================================================
// Import SCSS.
// =============================================================================
import style from '../login.scss';

class LoginForm extends Component {
  // `redux-form` provides data (form contents) and `store.dispatch`.
  submit = (data, dispatch) => {
    dispatch(login(data));
  };

  render() {
    // Fed as props from `redux-form`
    const { handleSubmit, submitting } = this.props;

    return (
      <form
        onSubmit={handleSubmit(this.submit)}
        noValidate
      >
        <h3>Login to Echelon</h3>
        <Field
          name="email"
          type="email"
          component={FormInput}
          placeholder="Email"
        />
        <Field
          name="password"
          type="password"
          component={FormInput}
          placeholder="Password"
        />
        <button
          type="submit"
          disabled={submitting}
          className="btn btn-primary btn-lg btn-block"
        >
          {submitting ? 'Logging in...' : 'Login'}
        </button>
        <hr />
        <Link to="/signup" className="btn">
          Create a new account
        </Link>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.email) {
    errors.email = 'Required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6 || values.password.length > 100) {
    errors.password = 'Must be more than 5 characters and less than 101';
  }

  return errors;
};

LoginForm.displayName = 'Partial/Login/LoginForm';

export default reduxForm({
  form: 'login',
  validate,
})(LoginForm);
