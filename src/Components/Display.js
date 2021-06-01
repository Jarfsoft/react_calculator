import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { value } = props;
  return (
    <div>
      {value}
    </div>
  );
}

Display.propTypes = {
  value: PropTypes.string,
};

Display.defaultProps = {
  value: '0',
};

export default Display;
