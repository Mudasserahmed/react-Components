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
}) => {
  return (
    <React.Fragment>
      {/* Input component version no 0.5 */}
      <label>Input Title</label>
      <input
        name={name}
        type={type}
        pattern="[a-zA-Z][a-zA-Z0-9\*"
        placeholder={placeholder}
        value={inputValue}
        size={size}  
        onChange={onChange}
        miength={minLength}
        maxLength={maxLength}
      />
    </React.Fragment>
  );
};

export default BasicInput;
