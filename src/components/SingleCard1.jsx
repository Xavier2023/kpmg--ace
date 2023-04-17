import React from "react";
import { Link } from "react-router-dom";
import "./SingleCard1.css";
import cardImg1 from "../assets/Rectangle 84.png";

function SingleCard1() {
  return (
    <>
      <div className="theCard">
        <img src={cardImg1} alt="background" />
        <div className="cardContent">
          <h4>KPMG ACE Suppliers</h4>
          <p>
            Suppliers are given access to this platform to expand their business
            reach to various clients.
          </p>
        </div>
      </div>
    </>
  );
}

export default SingleCard1;
