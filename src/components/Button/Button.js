import React from 'react';
import Style from './Button.module.css';

export const Button = ({ onClick, style, children, className }) => {
  return (
    <button onClick={onClick} className={`${Style.baptismButton} ${className}`} style={style}>
      {children}
    </button>
  );
};

