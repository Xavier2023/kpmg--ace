import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
import SingleCard from "./SingleCard";
import SingleCard1 from "./SingleCard1";

function Cards() {
  return (
    <>
      <div className="theCards">
        <SingleCard />
        <SingleCard1 />
      </div>
    </>
  );
}

export default Cards;
