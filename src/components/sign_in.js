import React, { Component } from 'react';
import { Fields, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, Col, Button, Checkbox, ControlLabel, Alert } from 'react-bootstrap';

import * as actions from '../actions/'

const renderFields = (fields) => (
    <div>
        <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
            Email
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
    </div>
)

class SignIn extends Component {

    constructor() {
        super();
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit = (input) => {
        const email = input['email'];
        const password = input['password'];

        //console.log('email: ' + email + '\npassword: ' + password);

        this.props.signInUser({ email, password });
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
                <Fields names={[ 'email', 'password' ]} component={renderFields}/>
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        {this.renderAlert()}
                        <Button type="submit">Sign in</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

function mapStateToProps (state) {
    return { errorMessage: state.auth.error }
}

SignIn = reduxForm({
    form: 'signin',  // a unique identifier for this form
})(SignIn);

export default connect(mapStateToProps, actions)(SignIn);
