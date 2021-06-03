import PropTypes from 'prop-types';
import React from 'react';
import './Button.css';

function Button(props) {
  const { name, press, key, fr } = props;
  const fraction = fr === '1' ? 'button1' : 'button0';
  return (
    <button className={fraction} type="button" key={key} onClick={() => press(name)}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  press: PropTypes.func.isRequired,
  key: PropTypes.string.isRequired,
  fr: PropTypes.string.isRequired,
};

export default Button;
