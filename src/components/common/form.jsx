import React, { Component } from 'react';
import Joi from 'joi-browser';

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const joiOptions = {
      abortEarly: false
    };
    const { error } = Joi.validate(this.state.data, this.schema, joiOptions);
    if (!error) return null;

    const errors = {};
    error.details.forEach(err => {
      errors[err.path[0]] = err.message;
    });

    return errors;
  };

  validateProperty = ({ name, value }) => {
    const inputObj = { [name]: value };
    const inputSchema = { [name]: this.schema[name] };
    const { error } = Joi.validate(inputObj, inputSchema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) {
      return;
    }
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} type="submit" className="btn btn-primary">
        {label}
      </button>
    );
  }
}

export default Form;
