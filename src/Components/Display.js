/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { result } = props;

  const validateResult = () => {
    if (!result.operation && !result.total && !result.next) return '0';

    if (!result.operation) {
      return result.total !== null ? result.total : '0';
    }

    return result.next !== null ? result.next : '0';
  };

  return (
    <div>
      {validateResult()}
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.object.isRequired,
};

export default Display;

/* eslint-enable react/forbid-prop-types */
