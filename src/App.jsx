import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/routes";
function App() {
  return (
    <div className="app">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="app">
//       routes
//       <Router>
//         <Route exact path="/" component={Navbar}></Route>
//         <Route exact path="/" component={Message}></Route>
//         <Route exact path="/" component={HeroScreen}></Route>
//         <Route exact path="/" component={Next}></Route>
//         <Switch>
//           <Route exact path="/signup" component={Signup}></Route>
//           <Route exact path="/login" component={Login}></Route>
//           <Route
//             exact
//             path="/forms/manufacturer"
//             component={ManufacturersForm}
//           ></Route>
//           <Route exact path="/forms/supplier" component={SupplierForm}></Route>
//           <Route exact path="/forms/request" component={RequestForm}></Route>
//           <Route exact path="/contactus" component={ContactUs}></Route>
//         </Switch>
//       </Router>
//       <Navbar />
//       {/* <Message /> */}
//       <HeroScreen />
//       <Next />
//       <Cards />
//       <Why />
//       <Footer />
//       <Router>
//         <Route exact path="/" component={Navbar}></Route>
//         <Route exact path="/" component={Message}></Route>
//         <Route exact path="/" component={HeroScreen}></Route>
//         <Route exact path="/" component={Next}></Route>
//         <Switch>
//           <Route exact path="/signup" component={Signup}></Route>
//           <Route exact path="/login" component={Login}></Route>
//           <Route
//             exact
//             path="/Manufacturer/Form"
//             component={ManufacturersForm}
//           ></Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// }
// export default App;
