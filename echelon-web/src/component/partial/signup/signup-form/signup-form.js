// =============================================================================
// Import modules.
// =============================================================================
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

// =============================================================================
// Import bases.
// =============================================================================
import { LabelInputField } from 'react-semantic-redux-form';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Icon
} from 'semantic-ui-react';

// =============================================================================
// Import actions.
// =============================================================================
import { signup } from 'action/session';

const SignupForm = ({handleSubmit, submitting}) => {
  const submit = (data, dispatch) => dispatch(signup(data));

  return (
    <Grid
      textAlign="center"
      style={{ height: '100%' }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Register a New User
        </Header>
        <Form size="large" onSubmit={handleSubmit(submit)}>
          <Segment stacked>
            <Field
              name="name"
              component={LabelInputField}
              placeholder="Name"
            />
            
            <Field
              name="username"
              component={LabelInputField}
              placeholder="Username"
            />

            <Field
              name="email"
              component={LabelInputField}
              placeholder="Email"
            />

            <Field
              name="password"
              component={LabelInputField}
              type="password"
              placeholder="Password"
            />

            <Button color="teal" fluid size="large">
              {submitting ? 'Registering...' : 'Signup'}
            </Button>
          </Segment>
        </Form>
        <Message>
          <Link to="/login">Login to Existing Account</Link>
        </Message>
      </Grid.Column>
    </Grid>
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

{/* <form
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
</form> */}
