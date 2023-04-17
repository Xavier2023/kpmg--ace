import React from "react";
import { Link } from "react-router-dom";
import "./SingleCard.css";
import cardImg from "../assets/Rectangle 82.png";

function SingleCard() {
  return (
    <>
      <div className="theCard">
        <img src={cardImg} alt="background" />
        <div className="cardContent">
          <h4>KPMG ACE Manufacturers</h4>
          <p>
            KPMG ACE provides users with a platform where manufacturers can find
            suppliers based on shared data.
          </p>
        </div>
      </div>
    </>
  );
}

export default SingleCard;
