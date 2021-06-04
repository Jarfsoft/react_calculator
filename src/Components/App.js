/* eslint-disable react/destructuring-assignment */

import React from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../Logic/calculate';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    const data = {
      total: null,
      next: null,
      operation: null,
    };
    this.state = data;
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
