import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Message from "../components/message";
import ContactUs from "../forms/ContactUs";
import HeroScreen from "../components/heroScreen";
import Next from "../components/Next";
import Cards from "../components/Cards";
import Why from "../components/Why";
import dan from "../assets/Frame 142.svg";
import ig from "../assets/instagram.svg";
import fb from "../assets/facebook.svg";
import twt from "../assets/twitter.svg";

const LandingPage = () => {
  const [ showContactUs, setshowContactUs ] = useState(false)

  const onShowClick = e => {
    setshowContactUs({showContactUs: !showContactUs})
  }
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg nav-light ">
          <div className="container-fluid">
            <div>
              <Link className="navbar-brand" to="/">
                  <img src={dan} alt="Dan" />
              </Link>
            </div>
  
            <div className="collapse navbar-collapse" id="navbarSupportedContentcolor">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active " aria-current="page" href="/">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="Services"
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/publications">
                    Publications
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={onShowClick}
                    className="nav-link active"
                    aria-current="page"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
              {showContactUs ? (
                <ContactUs />
              ) : null}
              <form className="d-flex">
                <Link onClick={onShowClick} className=" btn btn-outline-primary" >
                   Talk to an Expert
                </Link>
                <Link className="btn btn-primary" to="/login">
                  Log In
                </Link>
              </form>
            </div>
            </div>
        </nav>
      <Message />
      <HeroScreen />
      <Next />
      <Cards />
      <Why />
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
                <a
                  onClick={onShowClick}
                  className="nav-link active" 
                  aria-current="page">
                  Contact Us
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <a href=""><img src={ig} alt="ig" /></a>
              <a href=""><img src={fb} alt="fb" /></a>
              <a href=""><img src={twt} alt="twt" /></a>
              <Link onClick={onShowClick} className="btn btn-outline-primary" >
                 Talk to an Expert
              </Link>
            </form>
          </div>
          <div className="copyright">© 2022 Copyright Reserved Policy</div>
        </div>
      </nav>
    </div>
  );
};

export default LandingPage;
