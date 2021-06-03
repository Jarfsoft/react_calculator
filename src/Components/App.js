/* eslint-disable react/destructuring-assignment */

import React from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../Logic/calculate';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        total: null,
        next: null,
        operation: null,
      },
      display: <Display result={this.state.data} />,
    };
  }
  // const [data, setData] = useState({
  //  total: null,
  //  next: null,
  //  operation: null,
  // });

  // const [display, setDisplay] = useState(
  //  <Display result={data} />,
  // );

  saveInputHandler = (inputData) => {
    const cb = this.state.data;
    this.setState(calculate(cb, inputData), [React.callback]);
    this.setState([React.callback], <Display result={this.state.data} />);
  };

  render() {
    return (
      <>
        {this.state.display}
        <ButtonPanel onSaveInput={this.saveInputHandler} />
      </>
    );
  }
}

export default App;

/* eslint-enable react/destructuring-assignment */
