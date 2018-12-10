import React from "react";

export const Input = ({value, name, onChange}) => (
    <input type="text" name={name} onChange={onChange} value={value}/>
);
