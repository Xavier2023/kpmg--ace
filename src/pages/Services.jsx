import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import imgG from "../assets/Group 109.png";
import Footer from "../components/Footer";
import Pageheader from "../components/Pageheader";
import "./Services.css";

const Services = () => {
  return (
    <div>
      <Navbar />
        <div className="header"></div>
        <Pageheader />
        <div className="sec_image">
          <img src={imgG} alt="imgG" />
        </div>
        <div className="services">
        <div className="Cards">
          <div className="aCard">
            <div className="cardHeader">
              <h2>Find a Supplier</h2>
            </div>
            <div className="cardText">
              <p>
                KPMG ACE, a network platform with shared statistics, gives you
                up-to-date factory performance to help you decide whether to
                contract with a new facility. High-integrity data from every
                client on the platform provides clear metrics that make comparing
                factories to one another easy. KPMG ACE keeps everything in
                real-time, letting you conduct assessments, make data-driven
                decisions based on analytics, and finally create strategies to
                mitigate risk.
              </p>
            </div>
          </div>
          <div className="aCard">
            <div className="cardText">
              <p>
                KPMG ACE team utilize both historical and real-time data need to
                be used to make decisions for improving the supply chain. Data
                analytics will help clients understand the number of raw materials
                they need to procure, when to reduce the costs, and manage
                production. Employing Big data analytics helps understand the
                customers’ preferences, purchase behavior, and patterns, etc.
                Being armed with this information allows manufacturers to make
                changes to their products
              </p>
            </div>
            <div className="cardHeader">
              <h2>Data and Analytics Consultation</h2>
            </div>
          </div>
          <div className="aCard">
            <div className="cardHeader">
              <h2>Supply Chain Consultation</h2>
            </div>
            <div className="cardText">
              <p>
                KPMG ACE allows clients access expert consultants on discuss their
                current roles and future possibilities in the local supply chain.
                With expertise on supply chain management backed by data on
                suppliers available in the local market, consultants can identify
                potential value generating opportunities for your business.
              </p>
            </div>
          </div>
        </div>
        {/* <Link className="btn btn-primary" to="/login">
          Get Started
        </Link> */}
        <div className="buttn">
          <Link className="btn started btn-primary" to="/login">
            Get Started
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
