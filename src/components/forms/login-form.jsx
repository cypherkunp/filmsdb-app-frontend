import React from 'react';
import Joi from 'joi-browser';

import InputField from '../common/input-field';
import Form from './form';

class LoginForm extends Form {
  username = React.createRef();

  state = {
    data: {
      username: '',
      password: ''
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
      .min(8)
      .max(30)
      .label('Password')
  };

  doSubmit = e => {
    this.handleSubmit(e);
    // Server logics
    console.log('Submitted..');
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div id="login-form">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Login</h3>
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
              ></InputField>

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
              {this.renderButton('Login')}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
