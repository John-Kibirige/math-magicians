import React from 'react';
/* eslint-disable  */

const Key = (props) => {
    const orangeKeys = ['+', 'x', '-', '÷', '='] 
    const orange = orangeKeys.indexOf(props.value) !== -1 ? 'orange' : '';
    const twoSpace = props.value === '0' ? 'two-space' : '';

    const {value, handleClickEvent} = props;

    const handleBtnClick = () => handleClickEvent(value);

    return (
        <button onClick={handleBtnClick} className={`key ${orange} ${twoSpace}`}>{value}</button>
    )
}

export default Key;