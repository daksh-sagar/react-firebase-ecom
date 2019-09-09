import React from 'react'
import { Form } from 'react-final-form'
import isEmail from 'validator/lib/isEmail'
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import { signinWithGoogle } from '../../firebase/firebase.utils'

const Login = () => {
  const submitForm = async values => {
    console.log(values)
  }

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <Form onSubmit={submitForm}>
        {({ handleSubmit, submitting, pristine, valid }) => (
          <form className='form' onSubmit={handleSubmit} noValidate>
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
                return value.length < 6 ? 'Invalid Password' : undefined
              }}
            />
            <div className='buttons'>
              <CustomButton
                type='submit'
                disabled={submitting || pristine || !valid}
              >
                SIGN IN
              </CustomButton>
              <CustomButton onClick={signinWithGoogle} isGoogelSignIn={true}>
                SIGN IN With GOOGLE
              </CustomButton>
            </div>
          </form>
        )}
      </Form>
    </div>
  )
}
export default Login
