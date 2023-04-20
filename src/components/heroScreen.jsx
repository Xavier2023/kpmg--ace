import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/image 4.png";
import "./Why.css";

const Why = () => {
  return (
    <>
      <div className="bg_image">
        <img src={background} alt="background" />
        <h1>
          Digital gateway to a localized <br /> supply chain
        </h1>
      </div>
    </>
  );
};

export default Why;
