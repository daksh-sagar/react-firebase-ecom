import React from 'react'
import { Form } from 'react-final-form'
import isEmail from 'validator/lib/isEmail'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.styles.scss'

const SignUp = () => {
  const submitForm = async values => {
    const { displayName, email, password } = values
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )

      createUserProfileDocument(user, { displayName })
    } catch (error) {
      console.log('error while signing up', error.message)
    }
  }

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <Form onSubmit={submitForm}>
        {({ handleSubmit, values, valid, submitting, pristine }) => (
          <form className='sign-up-form' onSubmit={handleSubmit} noValidate>
            <FormInput
              type='text'
              name='displayName'
              id='displayName'
              label='Display Name'
              validator={value => {
                return !value ? 'Display Name is required' : undefined
              }}
            />
            <FormInput
              name='email'
              type='email'
              id='email'
              label='Email'
              validator={value => {
                return isEmail(value) ? undefined : 'Invalid Email address'
              }}
            />
            <FormInput
              name='password'
              type='password'
              id='password'
              label='Password'
              validator={value => {
                return value.length < 6
                  ? 'Password must contain atleast 6 characters'
                  : undefined
              }}
            />
            <FormInput
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              label='Confirm Password'
              validator={value => {
                return value === values.password
                  ? undefined
                  : 'Passwords do not match'
              }}
            />
            <div className='buttons'>
              <CustomButton
                type='submit'
                disabled={submitting || pristine || !valid}
              >
                SIGN UP
              </CustomButton>
            </div>
          </form>
        )}
      </Form>
    </div>
  )
}

export default SignUp
