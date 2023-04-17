import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Message from "./components/message";
import Navbar from "./components/navbar";
import HeroScreen from "./components/heroScreen";
import Next from "./components/Next";
import Signup from "./pages/Signup";

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
