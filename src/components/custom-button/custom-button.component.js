import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({
  type,
  children,
  isGoogelSignIn,
  disabled = false,
  ...otherProps
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${isGoogelSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomButton
