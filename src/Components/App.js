import React, { useState } from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../Logic/calculate';

function App() {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const [display, setDisplay] = useState(
    <Display result={data} />,
  );

  const saveInputHandler = (inputData) => {
    setData(calculate(data, inputData));
    setDisplay(
      <Display result={data} />,
    );
  };

  return (
    <>
      {display}
      <ButtonPanel onSaveInput={saveInputHandler} />
    </>
  );
}

export default App;
