import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  // state = {
  //   email: '',
  //   password: '',
  //   password2: '',
  //   category: '',
  // }

  return (
    <div className="signup-section">
      <img></img>
      <h1>KPMG ACE</h1>
      <div className="signup-content">
        <div className="user">
          <i className="fas fa-user"></i>
        </div>
        <h4>Create an account</h4>
        <form>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter your new password"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter email address"
            />
          </div>
          <div>
            <select name="sector" id="industry">
              <option value="Category">Choose a Category</option>
              <option value="Manufacturer">Manufacturer</option>
              <option value="Supplier">Supplier</option>
            </select>
          </div>
        </form>
        <input type="submit" value="Signup" className=" btn btn-primary" />
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
