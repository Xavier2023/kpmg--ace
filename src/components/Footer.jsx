import React from "react";
import { Link } from "react-router-dom";
import dan from "../assets/Frame 142.svg";
import ig from "../assets/instagram.svg";
import fb from "../assets/facebook.svg";
import twt from "../assets/twitter.svg";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div></div>
      <nav className=" color navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <div className="mg">
            <a className="navbar-brand" href="/">
              <img src={dan} alt="Dan" />
            </a>
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
                <a className="nav-link active" aria-current="page" href="/publications">
                  Publications
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/contactus">
                  Contact Us
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <a href=""><img src={ig} alt="ig" /></a>
              <a href=""><img src={fb} alt="fb" /></a>
              <a href=""><img src={twt} alt="twt" /></a>
              <Link className="btn btn-outline-primary" to="/contactus" >
                 Talk to an Expert
              </Link>
            </form>
          </div>
          <div className="copyright">© 2022 Copyright Reserved Policy</div>
        </div>
      </nav>
      
    </>
  );
}

export default Footer;
