import React from 'react';

const AlertBox = ({ message }) => {
  return (
    <p className="alert alert-dark" role="alert">
      {message}
    </p>
  );
};

export default AlertBox;
