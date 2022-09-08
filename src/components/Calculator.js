import React, { useState } from 'react';
import Key from './Key';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (keyPressed) => {
    setState((prevState) => ({
      ...calculate(prevState, keyPressed),
    }));
  };

  const keys = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const page = keys.map((k) => <Key value={k} key={k} handleClickEvent={handleClick} />);

  return (
    <section className="overall-container">
      <div className="display">{state.total ? state.total : '0'}</div>
      <div className="grid-container">
        {page}
      </div>
    </section>
  );
};

export default Calculator;
