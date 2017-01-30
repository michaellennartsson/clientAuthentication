import React, { Component } from 'react';
import { Fields, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, Col, Button, Checkbox, ControlLabel, Alert } from 'react-bootstrap';

import * as actions from '../actions/'

const renderFields = (fields) => (
  <div>
    <FormGroup>
      <Col componentClass={ControlLabel} sm={2}>
        Username
      </Col>
      <Col sm={10}>
        <FormControl {...fields.username.input} type="text" placeholder="Username" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email*
      </Col>
      <Col sm={10}>
        <FormControl {...fields.email.input} type="email" placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={10}>
        <FormControl {...fields.password.input} type="password" placeholder="Password" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password Confirmation 
      </Col>
      <Col sm={10}>
        <FormControl {...fields.passwordConf.input} type="password" placeholder="Password Confirmation " />
      </Col>
    </FormGroup>
  </div>
)

class SignUp extends Component {

  constructor() {
    super();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = (input) => {
    const username = input['username'];
    const email = input['email'];
    const password = input['password'];
    const passwordConf = input['passwordConf'];

    //console.log('username: ' + username + '\nemail: ' + email + '\npassword: ' + password + '\npasswordConf: ' + passwordConf);

    this.props.signUpUser({ email, password });
  }

  renderAlert = () => {
    if (this.props.errorMessage) {
      return (
        <Alert bsStyle="danger">
          <h4>Ohh snap!</h4>
          {this.props.errorMessage}
        </Alert>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Form horizontal onSubmit={handleSubmit(this.handleFormSubmit)}>
        <Fields names={[ 'username', 'email', 'password', 'passwordConf' ]} component={renderFields}/>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            {this.renderAlert()}
            <p>*Optional</p>
            <Button type="submit">Sign Up!</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

const validate = function (formProps) {
  const errors = {};

  //console.log(formProps);
  if (formProps.password !== formProps.passwordConf) {
    errors.password = 'Passwords must match!'
  }

  return errors;
}

function mapStateToProps (state) {
    return { errorMessage: state.auth.error }
}

SignUp = reduxForm({
    form: 'signup',  // a unique identifier for this form
    validate: validate
})(SignUp);

export default connect(mapStateToProps, actions)(SignUp);
