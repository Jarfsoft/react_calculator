import React, { Component } from 'react';

import Button from './Button';

export default class ButtonPanel extends Component {
  btns = ['AC', '+/-', '%', '÷', '4', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']

  render() {
    return (
      <>
        <div>
          {this.btns.slice(0, 4).map((btn) => <Button key={btn} name={btn} />)}
        </div>
        <div>
          {this.btns.slice(4, 8).map((btn) => <Button key={btn} name={btn} />)}
        </div>
        <div>
          {this.btns.slice(8, 12).map((btn) => <Button key={btn} name={btn} />)}
        </div>
        <div>
          {this.btns.slice(12, 16).map((btn) => <Button key={btn} name={btn} />)}
        </div>
        <div>
          {this.btns.slice(16, 19).map((btn) => <Button key={btn} name={btn} />)}
        </div>
      </>
    );
  }
}
