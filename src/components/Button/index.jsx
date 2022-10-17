import React from 'react';
import './styles.css'

const Button = (props) => {
  return (
    <button {...props} className={'button' + props.className}>

    </button>
  );
};

export default Button;
