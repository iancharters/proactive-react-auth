// =============================================================================
// Import modules.
// =============================================================================
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

// =============================================================================
// Import actions.
// =============================================================================
import { login } from 'action/session';

// =============================================================================
// Import components.
// =============================================================================
import FormInput from 'component/base/form-input';
import { LabelInputField } from 'react-semantic-redux-form';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Icon,
} from 'semantic-ui-react';

// =============================================================================
// Import SCSS.
// =============================================================================
import style from '../login.scss';

// =============================================================================
// Import images.
// =============================================================================
import Logo from 'asset/image/logo.png';

const LoginForm = ({ handleSubmit, submitting }) => {
  const submit = (data, dispatch) => dispatch(login(data));

  return (
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src={Logo} /> Proactive
        </Header>
        <Form size="large" onSubmit={handleSubmit(submit)}>
          <Segment stacked>
            <Field
              name="email"
              component={LabelInputField}
              label={{
                content: <Icon color="teal" name="user" size="large" />,
              }}
              labelPosition="left"
              placeholder="Username"
            />

            <Field
              name="password"
              component={LabelInputField}
              type="password"
              label={{
                content: <Icon color="teal" name="lock" size="large" />,
              }}
              labelPosition="left"
              placeholder="Password"
            />

            <Button color="teal" fluid size="large">
              {submitting ? 'Logging in...' : 'Login'}
            </Button>
          </Segment>
        </Form>
        <Message>
          <Link to="/signup">Create a new account</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

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
