import React from 'react';
import PropTypes from 'prop-types';
import './TextField.css';

const TextField = ({ id, classname, rounded, greenBg }) => {
  const textFieldStyle = {
    borderRadius: rounded ? '10px' : '0',
    borderBottom: !greenBg ? '1px solid #ccc' : 'none',
    backgroundColor: greenBg ? 'green' : 'transparent',
  };

  return <input id={id} className={`custom-textfield ${classname}`} style={textFieldStyle} />;
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  classname: PropTypes.string,
  rounded: PropTypes.bool,
  greenBg: PropTypes.bool,
};

export default TextField;
