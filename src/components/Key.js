import React from 'react';
/* eslint-disable  */

class Key extends React.Component {
    render() {
        const orangeKeys = ['+', 'x', '-', '÷', '='] 
        const orange = orangeKeys.indexOf(this.props.value) !== -1 ? 'orange' : '';
        const twoSpace = this.props.value === '0' ? 'two-space' : '';

        const {value, handleClickEvent} = this.props;

        const handleBtnClick = () => handleClickEvent(value);

        return (
            <button onClick={handleBtnClick} className={`key ${orange} ${twoSpace}`}>{value}</button>
        )
    }
}

export default Key;