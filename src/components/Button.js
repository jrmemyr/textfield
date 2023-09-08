import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ text, color, rounded }) => {
  const buttonStyle = {
    backgroundColor: color,
    borderRadius: rounded ? '8px' : '0',
  };

  return <button className="custom-button" style={buttonStyle}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
};

export default Button;
