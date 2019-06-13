import React from 'react';
import Joi from 'joi-browser';

import Form from './form';
import InputField from '../common/input-field';

class RegistrationForm extends Form {
  state = {
    data: {
      username: '',
      password: '',
      fullName: ''
    },
    errors: {}
  };
  schema = {
    username: Joi.string()
      .required()
      .email()
      .label('Username'),
    password: Joi.string()
      .required()
      .alphanum()
      .min(8)
      .max(30)
      .label('Password'),
    fullName: Joi.string()
      .required()
      .label('Full Name')
  };

  doSubmit = e => {
    this.handleSubmit(e);
    // Server logics
    console.log('Submitted..');
  };
  render() {
    const { data, errors } = this.state;
    return (
      <div id="registration-form">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Register</h3>
            <form onSubmit={this.doSubmit}>
              <InputField
                autoFocus="true"
                type="email"
                name="username"
                placeholder="Enter username..."
                label="Email address"
                value={data.username}
                error={errors.username}
                aria-describedby="usernameHelp"
                onChange={this.handleChange}
              >
                <small id="usernameHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </InputField>

              <InputField
                autoFocus="false"
                type="password"
                name="password"
                placeholder="Password"
                label="Password"
                error={errors.password}
                value={data.password}
                onChange={this.handleChange}
              />

              <InputField
                autoFocus="false"
                type="text"
                name="fullName"
                placeholder="Full Name"
                label="Full Name"
                error={errors.fullName}
                value={data.fullName}
                onChange={this.handleChange}
              />
              {this.renderButton('Register')}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
