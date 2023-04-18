import React from "react";
import Message from "./components/message";
import Navbar from "./components/navbar";
import HeroScreen from "./components/heroScreen";
import Next from "./components/Next";
import Cards from "./components/Cards";
import Why from "./components/Why";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      {/* <Message /> */}
      <HeroScreen />
      <Next />
      <Cards />
      <Why />
      <Footer />
    </div>
  );
};

export default LandingPage;
