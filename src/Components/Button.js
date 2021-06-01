import PropTypes from 'prop-types';
import React from 'react';

function Button(props) {
  const { name, key } = props;
  return (
    <button type="button" key={key}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

export default Button;
