import React, { Component } from 'react';

class InputField extends Component {
  render() {
    const {
      name,
      type,
      label,
      value,
      placeholder,
      error,
      autoFocus,
      onChange,
    } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          autoFocus={autoFocus === 'true'}
          type={type}
          className="form-control"
          id={name}
          name={name}
          placeholder={placeholder}
          aria-describedby={this.props['aria-describedby']}
          value={value}
          onChange={onChange}
        />
        {error && <div className="badge badge-danger">{error} </div>}
        {this.props.children}
      </div>
    );
  }
}

export default InputField;
