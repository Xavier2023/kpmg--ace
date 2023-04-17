import React from "react";
import { Link } from "react-router-dom";
import whyi from "../assets/image 5.png";
import "./heroScreen.css";

const Why = () => {
  return (
    <>
      <div class="whySection">
        <img src={whyi} alt="background" />
        <div className="whyContent">
          <h1>
            Digital gateway to a localized <br /> supply chain
          </h1>
          <p>
            With KPMG ACE, you get to purchase <br /> distribute goods with ease
            by <br />
            communicating directly with the <br /> manufactures and the
            suppliers. Sign <br />
            up within your suitable category <br /> below.
          </p>
          <button className="btn btn-primary" type="submit">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default Why;
