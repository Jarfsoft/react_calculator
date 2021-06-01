import PropTypes from 'prop-types';
import React from 'react';

function Button(props) {
  const { value, key } = props;
  return (
    <button type="button" key={key}>
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

export default Button;
