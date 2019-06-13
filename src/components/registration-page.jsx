import React, { Component } from 'react';
import RegistrationForm from './forms/registration-form';

class RegistrationPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h1>Welcome to vidly App.</h1>
          </div>
          <div className="col-sm-6">
            <RegistrationForm />
          </div>
        </div>
      </div>
    );
  }
}

export default RegistrationPage;
