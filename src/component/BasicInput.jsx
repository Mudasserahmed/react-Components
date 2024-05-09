import { colors } from "@mui/material";
import React from "react";

const BasicInput = ({
  placeholder,
  minLength,
  maxLength,
  label,
  type,
  inputValue,
  name,
  onChange,
  size,
  error,
  ...props
}) => {
  return (
    <React.Fragment>
      {/* Input component version no 0.5 */}
       <label> {label} </label><br />
      <input
        name={name}
        type={type}
        pattern="[a-zA-Z][a-zA-Z0-9\*"
        placeholder={placeholder}
        value={inputValue}
        size={size}  
        onChange={onChange}
        minLength={minLength}
        maxLength={maxLength}
        {...props}
      />
       {error ? <p style={{color:"red"}}> {error} </p> : null}
    </React.Fragment>
  );
};

export default BasicInput;