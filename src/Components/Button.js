import PropTypes from 'prop-types';
import React from 'react';

function Button(props) {
  const { name, press, key } = props;
  return (
    <button type="button" key={key} onClick={() => press(name)}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  press: PropTypes.func.isRequired,
  key: PropTypes.string.isRequired,
};

export default Button;
