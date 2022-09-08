import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { PropTypes } from 'prop-types';

const Key = ({ value, handleClickEvent }) => {
  const orangeKeys = ['+', 'x', '-', '÷', '='];
  const orange = orangeKeys.indexOf(value) !== -1 ? 'orange' : '';
  const twoSpace = value === '0' ? 'two-space' : '';

  const handleBtnClick = () => handleClickEvent(value);

  return (
    <button onClick={handleBtnClick} className={`key ${orange} ${twoSpace}`} type="button">{value}</button>
  );
};

Key.propTypes = {
  value: PropTypes.string.isRequired,
  handleClickEvent: PropTypes.func.isRequired,
};

export default Key;
