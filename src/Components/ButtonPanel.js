/* eslint-disable react/jsx-key */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import './ButtonPanel.css';

export default class ButtonPanel extends Component {
  btns = ['AC', '+/-', '%', '÷', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']

  iExceptions = [3, 7, 11, 15];

  callButton(x, y, sIH) {
    return this.btns.slice(x, y).map(
      (btn, i) => <Button fr={this.iExceptions.includes(i) ? '1' : '0'} press={sIH} name={btn} />,
    );
  }

  render() {
    const { onSaveInput } = this.props;
    return (
      <div className="buttonPanel">
        <div key={1}>
          {this.callButton(0, 4, onSaveInput)}
        </div>
        <div key={2}>
          {this.callButton(4, 8, onSaveInput)}
        </div>
        <div key={3}>
          {this.callButton(8, 12, onSaveInput)}
        </div>
        <div key={4}>
          {this.callButton(12, 16, onSaveInput)}
        </div>
        <div key={5}>
          {this.callButton(16, 19, onSaveInput)}
        </div>
      </div>
    );
  }
}
ButtonPanel.propTypes = {
  onSaveInput: PropTypes.func.isRequired,
};

/* eslint-enable react/jsx-key */
