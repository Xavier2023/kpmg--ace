import React from "react";
import "./App.css";
import Message from "./components/message";
import Navbar from "./components/navbar";
import HeroScreen from "./components/heroScreen";
import Next from "./components/Next";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Message />
      <HeroScreen />
      <Next />
    </div>
  );
}

export default App;
