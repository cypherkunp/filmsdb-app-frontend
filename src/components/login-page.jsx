import React, { Component } from 'react';
import LoginForm from './forms/login-form';

class LoginPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <h1>Welcome to vidly App.</h1>
          </div>
          <div className="col-sm-4">
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
