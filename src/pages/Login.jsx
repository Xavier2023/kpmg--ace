import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const validate = () => {
    let result=true
    if(email ==='' || email === null){
      result=false
      toast.warning('Please Enter Email');
    }
    if(password ==='' || password === null){
      result=false
      toast.warning('Please Enter Password');
    }
    return result;
  }

  const handleClick = (e) => {
    e.preventDefault()
    if(validate()) {
      console.log(email, password);
      toast.success('Login Successful')
      navigate('/manufacturersportal')
    }
  }

  return (

    <div className="login-section">
      <Link to="/">
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
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter your new password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <Link
            style={{ marginLeft: "28px", fontWeight: "700", fontSize: "13px" }}
            to=""
          >
            Forgot Password?
          </Link>
        </form>
        <button 
          className="btn-login"
          onClick={handleClick}
        >
          Log in
        </button>
        
        <p> Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
      <div className="footnote">
        <p>
          © 2022 KPMG Professional Services, a partnership registered in Nigeria
          and a member firm of the KPMG global organisation ofindependen member
          firms affiliated with KPMG International Limited, a private English
          company limited by guarantee. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
