import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Message from "./components/message";
import Navbar from "./components/navbar";
import HeroScreen from "./components/heroScreen";
import Next from "./components/Next";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ManufacturersForm from "./pages/ManufacturersForm";

function App() {
  return (
    <div className="app">
      <Router>
        <Route exact path='/' component={Navbar}></Route>
        <Route exact path='/' component={Message}></Route>
        <Route exact path='/' component={HeroScreen}></Route>
        <Route exact path='/' component={Next}></Route>
        <Switch>
          <Route exact path='/signup' component={Signup}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/Manufacturer/Form' component={ManufacturersForm}></Route>
        </Switch>
      </Router>
      
    </div>
  );
}
export default App;
