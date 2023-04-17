import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Message from "./components/message";
import Navbar from "./components/navbar";
import HeroScreen from "./components/heroScreen";
import Next from "./components/Next";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ContactUs from "./forms/ContactUs";
import RequestForm from "./forms/RequestForm";
import ManufacturersForm from "./forms/ManufacturersForm";
import SupplierForm from "./forms/SupplierForm";
import Cards from "./components/Cards";
import Why from "./components/Why";
import Footer from "./components/Footer";

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
          <Route exact path='/forms/manufacturer' component={ManufacturersForm}></Route>
          <Route exact path='/forms/supplier' component={SupplierForm}></Route>
          <Route exact path='/forms/request' component={RequestForm}></Route>
          <Route exact path='/contactus' component={ContactUs}></Route>
        </Switch>
      </Router>
      
      <Navbar />
      {/* <Message /> */}
      <HeroScreen />
      <Next />
      <Cards />
      <Why />
      <Footer />
    </div>
  );
}
export default App;
