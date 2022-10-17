import React from 'react';
import '../Button/styles.css'

const Button = (props) => {
  return (
    <button {...props} className={'button' + props.className}>

    </button>
  );
};

export default Button;
