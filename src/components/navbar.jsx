import React from "react";
import { Link } from "react-router-dom";
import dan from "../assets/Frame 142.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div>
            <Link className="navbar-brand" to="/">
              <img src={dan} alt="Dan" />
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Publications
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Contact Us
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-success" type="submit">
                Talk to an Expert
              </button>
              <Link className="btn btn-primary" to='/login' >
                Log In
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
