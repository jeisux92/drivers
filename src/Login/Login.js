import React from 'react'
import logo from '../liftit.svg'
import { Field, reduxForm } from 'redux-form'
import store from '../store'

const imgStyle = {
  backgroundColor: '#9393a0',
  height: '60px'
}



const loginForm = function (props) {
  const { handleSubmit } = props
  return (
    <div className='card'>
      <img
        className='card-img-top'
        src={logo}
        alt='Card cap'
        style={imgStyle}
      />
      <form className='card-body' onSubmit={handleSubmit}>
        <div className='form-group col-md-10 mx-auto'>
          <label htmlFor='user' className='label'>
            Usario
          </label>
          <Field
            name='user'
            type='text'
            required='required'
            component='input'
            className='form-control form-control-sm text-center'
          />
        </div>
        <div className='form-group col-md-10 mx-auto'>
          <label htmlFor='password' className='label'>
            Password
          </label>
          <Field
            name='password'
            type='password'
            required='required'
            component='input'
            className='form-control form-control-sm text-center'
          />
        </div>
        <button type='submit' className='btn btn-sm btn-primary'>
          Login
        </button>
      </form>
    </div>
  )
}

export default reduxForm({
  // a unique name for the form
  form: 'login'
})(loginForm)
