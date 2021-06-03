import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

export default class ButtonPanel extends Component {
  btns = ['AC', '+/-', '%', '÷', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']

  callButton(x, y, sIH) {
    return this.btns.slice(x, y).map(
      (btn) => <Button key={btn} press={sIH} name={btn} />,
    );
  }

  render() {
    const { onSaveInput } = this.props;
    return (
      <>
        <div>
          {this.callButton(0, 4, onSaveInput)}
        </div>
        <div>
          {this.callButton(4, 8, onSaveInput)}
        </div>
        <div>
          {this.callButton(8, 12, onSaveInput)}
        </div>
        <div>
          {this.callButton(12, 16, onSaveInput)}
        </div>
        <div>
          {this.callButton(16, 19, onSaveInput)}
        </div>
      </>
    );
  }
}
ButtonPanel.propTypes = {
  onSaveInput: PropTypes.func.isRequired,
};
