import React from 'react'

const BasicCheckbox = ({checked,onChange,label}) => {
  return (
    <label htmlFor=""> 
    <input 
     type='checkbox'
     name='basic-checkbox'
     onChange={onChange}
     checked = {checked}
    />
    {label}
    </label>
  )
}

export default BasicCheckbox