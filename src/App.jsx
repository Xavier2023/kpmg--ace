import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import LandingPage from "./Pages/Landing-Page";
import Publictaion from "./pages/Publictaion";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ContactUs from "./forms/ContactUs";
import RequestForm from "./forms/RequestForm";
import ManufacturersForm from "./forms/ManufacturersForm";
import SupplierForm from "./forms/SupplierForm";
import Services from "./pages/Services";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route elememt={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/publications" element={<Publictaion />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/RequestForm" element={<RequestForm />} />
      <Route path="/ManufacturesForm" element={<ManufacturersForm />} />
      <Route path="/SupplierForm" element={<SupplierForm />} />
      <Route path="/Services" element={<Services />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
    //   <div className="App">
    //     <header className="App-header">
    //       <Link to="/">Home</Link>
    //       <Link to="/Signup">Signup</Link>
    //       <Link to="/Login">Login</Link>
    //       <Link to="/ContactUs">Contact Us</Link>
    //       <Link to="/RequestForm">Request Form</Link>
    //       <Link to="/ManufacturersForm">Manufacturers Form</Link>
    //       <Link to="/SupplierForm">Supplier Form</Link>
    //     </header>
    //   </div>
    // </RouterProvider>
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