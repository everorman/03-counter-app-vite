import PropTypes from 'prop-types';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  const handleAdd = () => {
    setCounter((c) => c + 1);
  };
  return (
    <>
      <h1>Counter App</h1>
      <h2> {counter} </h2>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propsType = {
  value: PropTypes.number,
};

CounterApp.defaultProps = {
  value: 1,
};
