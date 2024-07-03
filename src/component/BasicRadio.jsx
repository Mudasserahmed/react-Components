import React from 'react'

const BasicRadio = ({handleChange,...props}) => {
  return (
    <input 
    type='radio'
    onClick={handleChange}
    {...props}
    />
  )
}

export default BasicRadio