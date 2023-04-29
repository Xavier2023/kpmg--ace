import React, { Component } from "react";
import { Link } from "react-router-dom";
import ContactUs from "../forms/ContactUs"
import dan from "../assets/Frame 142.svg";
import "./Navbar.css";

class  Navbar extends Component {
  state = {
    showContactUs: false
  }

  onShowClick = e => {
    this.setState({showContactUs: !this.state.showContactUs})
  }
  render () {
    return (
      <>
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
                    onClick={this.onShowClick}
                    className="nav-link active"
                    aria-current="page"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
              {this.state.showContactUs ? (
                <ContactUs />
              ) : null}
              <form className="d-flex">
                <Link onClick={this.onShowClick} className=" btn btn-outline-primary" >
                   Talk to an Expert
                </Link>
                <Link className="btn btn-primary" to="/login">
                  Log In
                </Link>
              </form>
            </div>
            </div>
        </nav>
      </>
    );
  }
  }

  

export default Navbar;
