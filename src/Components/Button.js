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
    key,
    fr,
  } = props;
  const num = fr ? ' btn3' : '';
  return (
    <button className={`btn${num}`} style={name !== '0' ? divStyle1 : divStyle2} type="button" key={key} onClick={() => press(name)}>
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
