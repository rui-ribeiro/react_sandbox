import React from 'react';

const Button = ({title, handleOnClick}) => (
    <button onClick={handleOnClick}>{title}</button>
);

export default Button;
