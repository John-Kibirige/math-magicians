import React from 'react';
import Key from './Key';
import calculate from '../logic/calculate';

/* eslint-disable  */
class Calculator extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    } 
  }

  handleClick(keyPressed) {
    this.setState(prevState => ({
      ...calculate(prevState, keyPressed)
    }))
  }
  
  render() {
    const keys = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='] 
    const page = keys.map(k => <Key value={k} key={k} handleClickEvent={this.handleClick}/>)

    return (
      <section className="overall-container">
        <div className="display">{this.state.total ? this.state.total : '0'}</div>
        <div className='grid-container'>
            {page}
        </div>        
      </section>

    );
  }
}

export default Calculator;
