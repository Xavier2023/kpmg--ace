import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { toast } from "react-toastify";
import axios from "../api/axios";

// Validate email and password
const EMAIL_SIGNIN = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/
const PASSWORD_SIGNIN = /^(?=.*[a-z])(?=.*[0-9]).{6,24}$/

const REGISTER_URL = '/api/v1/register'

const Signup = () => {


  const [email, setEmail] = useState('');
  
  const [password, setPassword] = useState('');
 

  const [compare, setCompare] = useState('');


  const [category, setCategory] = useState('Choose a Category');


  // VALIDATION AND ERROR MESSAGES
  const isValid=()=>{
    let isproceed = true;
    let errormessage;

    if(email===null || email===''){
      isproceed=false
      errormessage += ' Email'
    }
    if(password===null || password===''){
      isproceed=false
      errormessage += ' Password'
    }
    if(category==='Choose a Category'){
      isproceed=false
      errormessage += ' category'
    }
    if(!isproceed){
      toast.warning(errormessage)
    }else{
        if(EMAIL_SIGNIN.test(email)){

        }else{
          isproceed=false;
          toast.warning('Please enter a valid email')
        }
        if(PASSWORD_SIGNIN.test(password)){

         }else{
            isproceed=false;
            toast.warning('Please enter a valid password Must contain uppercase, lowercase and numbers ')
          }
        if (password === compare){

        }else{
          isproceed=false;
          toast.warning(`'Password doesn't match `)
        }   
    } 
    return isproceed;
}



  // useEffect(() => {
  //   const result = EMAIL_SIGNIN.test(email);
  //   setValidEmail(result)
  // },[email])

  // useEffect(() => {
  //   const result = PASSWORD_SIGNIN.test(password)
  //   setValidPassword(result)
  //   const match = password === matchPassword;
  //   setValidMatch(match);
  // },[password, matchPassword])
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(isValid()){
      try {
        const response = await axios.post(REGISTER_URL, JSON.stringify({email, password, compare, category}), 
        {
          headers: {'Content-Type' : 'application/json'}
        })
        console.log(response.data);
        console.log(JSON.stringify(response));
      } catch (err) {
        if (!err?.response) {
          toast.error('No Server Response')
        } else if (err.response?.status === 409) {
          toast.error('User already exists');
        } else {
          toast.error('Registration Failed')
        }
      }
      console.log(email, password, compare, category);
      toast.success('Registration Successful')
      // navigate('/manufacturersform')
    }
    
  }

  return (
    <div className="signup-section">
      <Link to="/">
        <img></img>
      </Link>
      <h1>KPMG ACE</h1>
      <div className="signup-content">
        <div className="user">
          <i className="fas fa-user"></i>
        </div>
        <h4>Create an account</h4>
        <form 
          onSubmit={handleSubmit}
        >
          <div>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your new password" 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={compare}
              placeholder="Re-enter your password"    
              onChange={(e) => setCompare(e.target.value)}
            />
          </div>
          <div>
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Category">Choose a Category</option>
              <option value="Manufacturer">Manufacturer</option>
              <option value="Supplier">Supplier</option>
            </select>
          </div>
          <button className=" btn btn-primary">Sign up</button>
        </form>
        <p>
          Have an account? <Link to="/login">Log in</Link>
        </p>
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

export default Signup;
