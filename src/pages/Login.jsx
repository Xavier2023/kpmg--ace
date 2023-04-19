import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <div className='login-section'>
      <Link to="/" >
      <img></img>
      </Link>
      
      <h1>KPMG ACE</h1>
      <div className="login-content">
        <div className="user">
          <i className="fas fa-user"></i>
        </div>
        <h4>Log into an account</h4>
        <form>
          <div>
            <input type="email" name='email'  placeholder='Enter email address'/>
          </div>
          <div>
            <input type="password" name='password'  placeholder='Enter your new password'/>
          </div>
          <Link style={{marginLeft: '28px',fontWeight: '700', fontSize: '13px'}} to=''>Forgot Password?</Link>
        </form>
        <input type="submit" value="Log in" className=' btn btn-primary'/>
        <p> Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
      <div className="footnote">
        <p>
          © 2022 KPMG Professional Services, a partnership registered in Nigeria and a member firm of the KPMG global organisation ofindependen member firms affiliated with KPMG International Limited, a private English company limited by guarantee. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Login
