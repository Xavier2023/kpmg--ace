import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>Log into your account</h1>
        <form>
          <div>
            <input type="email" name='email'  placeholder='Enter email address'/>
          </div>
          <div>
            <input type="password" name='password'  placeholder='Enter your new password'/>
          </div>
          <p>Forgot Password?</p>
        </form>
        <button className="btn btn-primary" type="submit">
          Log In
        </button>
    </div>
  )
}

export default Login
