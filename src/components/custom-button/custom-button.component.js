import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({ type, children, disabled = false }) => {
  return (
    <button type={type} disabled={disabled} className='custom-button'>
      {children}
    </button>
  )
}

export default CustomButton
