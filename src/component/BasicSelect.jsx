import React, { useState } from 'react';

function BasicSelect({ options,handleChange,selectedOption, label ,...props}) {
  return (
    <div>
      <label>{label}</label><br />
      <select value={selectedOption} onChange={handleChange} {...props}>
        <option value="">
          Select an option
          </option>
        {/* options array  */}
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

export default BasicSelect;
