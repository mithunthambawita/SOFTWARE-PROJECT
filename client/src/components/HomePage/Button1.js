import React from 'react';
import '../Style/Button1.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary1', 'btn--outline1', 'btn--test1'];

const SIZES = ['btn--medium1', 'btn--large1'];

export const Button1 = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/sign-up' className='btn-mobile1'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
