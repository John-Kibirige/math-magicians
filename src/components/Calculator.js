import React from 'react';
import Key from './Key';

/* eslint-disable  */
class Calculator extends React.Component {

 keys = ['AC', '+/-', '%', '+', 7, 8, 9, 'X', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='] 
 page = this.keys.map(key => <Key value={key} />)

  render() {
    return (
      <div className='grid-container'>
        {this.page}
      </div>
    );
  }
}

export default Calculator;
