import React from 'react'
import { Field } from 'react-final-form'
import './form-input.styles.scss'

const FormInput = ({
  name,
  type,
  validator = () => undefined,
  id,
  label,
  placeholder
}) => {
  return (
    <Field name={name} type={type} validate={value => validator(value || '')}>
      {({ input, meta }) => (
        <div className='group'>
          {label ? (
            <label
              className={`${
                input.value.length ? 'shrink' : ''
              } form-input-label`}
              htmlFor={id}
            >
              {label}
            </label>
          ) : null}
          <input
            className='form-input'
            {...input}
            placeholder={placeholder}
            id={id}
          />
          {meta.error && meta.touched && (
            <span style={{ color: '#e91e63' }}>{meta.error}</span>
          )}
        </div>
      )}
    </Field>
  )
}

export default FormInput
