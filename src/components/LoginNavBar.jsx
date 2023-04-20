import React from "react";
import { Link } from "react-router-dom";
import dan from "../assets/Frame 142.svg";
import './loginNavBar.css';

const LoginNavBar = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg ">
        <div className="container-fluid">
          <div className="navbrand">
            <Link className="navbar-brand" to="/">
              <img src={dan} alt="Dan" />
            </Link>
          </div>
          <div className="user-info">
            <div className="info">
              <h1>Owusu Ayotunde</h1>
              <h2>Manufacturer, Bluelight Technology</h2>
            </div>
            <div className="initials">
              <p>OA</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default LoginNavBar
