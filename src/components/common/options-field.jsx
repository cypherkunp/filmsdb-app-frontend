import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OptionsField extends Component {
  render() {
    const { id, label, placeholder, options, valueProperty } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <select className="custom-select" id={id} defaultValue={placeholder}>
          <option disabled>{placeholder}</option>
          {options &&
            options.map((option, index) => (
              <option key={index} value={index}>
                {!!valueProperty ? option[valueProperty] : option[index]}
              </option>
            ))}
        </select>
      </div>
    );
  }
}

OptionsField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  valueProperty: PropTypes.string
};

export default OptionsField;
