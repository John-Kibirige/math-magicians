import React from 'react';
/* eslint-disable  */

class Key extends React.Component {
    render() {
        const orangeKeys = ['+', 'x', '-', '÷', '='] 
        const orange = orangeKeys.indexOf(this.props.value) !== -1 ? 'orange' : '';
        const twoSpace = this.props.value === 0 ? 'two-space' : '';

        return (
            <button className={`key ${orange} ${twoSpace}`}>{this.props.value}</button>
        )
    }
}

export default Key;