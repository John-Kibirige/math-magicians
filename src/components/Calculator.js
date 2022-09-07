import React from 'react';
import Key from './Key';

/* eslint-disable  */
class Calculator extends React.Component {

 keys = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='] 
 page = this.keys.map(key => <Key value={key} key={key} />)

  render() {
    return (
      <section className="overall-container">
        <div className="display">0</div>
        <div className='grid-container'>
            {this.page}
        </div>        
      </section>

    );
  }
}

export default Calculator;
