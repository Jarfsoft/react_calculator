/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */

import React from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../Logic/calculate';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  saveInputHandler = (inputData) => {
    const cb = this.state;
    this.setState(calculate(cb, inputData));
  };

  render() {
    return (
      <>
        <Display result={this.state} />
        <ButtonPanel onSaveInput={this.saveInputHandler} />
      </>
    );
  }
}

export default App;

/* eslint-enable react/destructuring-assignment */
/* eslint-enable react/no-unused-state */
