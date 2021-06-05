import PropTypes from 'prop-types';
import React from 'react';
import './Button.css';

function Button(props) {
  const divStyle1 = {
    width: '25%',
  };
  const divStyle2 = {
    width: '50%',
  };
  const {
    name,
    press,
    fr,
  } = props;
  const num = fr === '1' ? ' btn3' : '';
  return (
    <button className={`btn${num}`} style={name !== '0' ? divStyle1 : divStyle2} type="button" onClick={() => press(name)}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  press: PropTypes.func.isRequired,
  fr: PropTypes.string.isRequired,
};

export default Button;
