// =============================================================================
// Import modules.
// =============================================================================
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

// =============================================================================
// Import bases.
// =============================================================================
import FormInput from 'component/base/form-input';

// =============================================================================
// Import actions.
// =============================================================================
import { signup } from 'action/session';

const SignupForm = ({handleSubmit, submitting}) => {
  const submit = (data, dispatch) => dispatch(signup(data));

  return (
    <form
      className="form-signup card"
      onSubmit={handleSubmit(submit)}
      noValidate
    >
      <h3>Create an account</h3>
      <Field
        name="name"
        type="text"
        component={FormInput}
        placeholder="Full name"
        className="form-control"
      />
      <Field
        name="username"
        type="text"
        component={FormInput}
        placeholder="Username"
        className="form-control"
      />
      <Field
        name="email"
        type="email"
        component={FormInput}
        placeholder="Email"
        className="form-control"
      />
      <Field
        name="password"
        type="password"
        component={FormInput}
        placeholder="Password"
        className="form-control"
      />
      <button
        type="submit"
        disabled={submitting}
        className="btn btn-primary btn-lg btn-block"
      >
        {submitting ? 'Submitting...' : 'Sign up'}
      </button>
      <hr />
      <Link to="/login" className="btn">
        Login to your account
      </Link>
    </form>
  );
};

const validate = values => {
  const errors = {};
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 1 || values.name.length > 255) {
    errors.name = 'Must be less than 256 characters';
  }

  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length < 1 || values.username.length > 26) {
    errors.username = 'Must be less than 27 characters';
  }

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

SignupForm.displayName = 'Partial/SignupForm';

export default reduxForm({
  form: 'signup',
  validate,
})(SignupForm);
