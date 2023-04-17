import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/image 4.png";
import "./heroScreen.css";

const HeroScreen = () => {
  return (
    <>
      <div
        class="bg_image"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5",
        }}
      >
        <h1>Digital gateway to a localized supply chain</h1>
      </div>
      ;
    </>
  );
};

export default HeroScreen;
