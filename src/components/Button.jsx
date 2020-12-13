import React from 'react';
import style from './button.module.css';
const Button = ({name, onsubmit}) => (
      <button className={style.button} onClick={onsubmit}>
        {name}
      </button>
  );

export default Button;