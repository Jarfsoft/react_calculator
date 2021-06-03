import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import './ButtonPanel.css';

export default class ButtonPanel extends Component {
  btns = ['AC', '+/-', '%', '÷', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']

  callButton(x, y, sIH, fraction) {
    if (fraction === '1') {
      return this.btns.slice(x, y).map(
        (btn) => <Button fr={fraction} key={btn} press={sIH} name={btn} />,
      );
    }

    return (
      <>
        <Button fr="1" key="0" press={sIH} name="0" />
        <Button fr="1" key="." press={sIH} name="." />
        <Button fr="0" key="=" press={sIH} name="=" />
      </>
    );
  }

  render() {
    const { onSaveInput } = this.props;
    return (
      <div className="buttonPanel">
        <div>
          {this.callButton(0, 4, onSaveInput, '1')}
        </div>
        <div>
          {this.callButton(4, 8, onSaveInput, '1')}
        </div>
        <div>
          {this.callButton(8, 12, onSaveInput, '1')}
        </div>
        <div>
          {this.callButton(12, 16, onSaveInput, '1')}
        </div>
        <div>
          {this.callButton(16, 19, onSaveInput, '0')}
        </div>
      </div>
    );
  }
}
ButtonPanel.propTypes = {
  onSaveInput: PropTypes.func.isRequired,
};
