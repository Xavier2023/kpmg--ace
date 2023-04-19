import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import LandingPage from "../Pages/Landing-Page";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ContactUs from "../forms/ContactUs";
import RequestForm from "../forms/RequestForm";
import ManufacturersForm from "../forms/ManufacturersForm";
import SupplierForm from "../forms/SupplierForm";
import Root from "../pages/root";

// const router = createBrowserRouter ([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path: "LandingPage",
//         element: <LandingPage />,
//       },
//       {
//         path: "Signup",
//         element: <Signup />,
//       },
//       {
//         path: "Login",
//         element: <Login />,
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<LandingPage />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/RequestForm" element={<RequestForm />} />
      <Route path="/ManufacturesForm" element={<ManufacturersForm />} />
      <Route path="/SupplierForm" element={<SupplierForm />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} fallbackElement={<BigSpinner />} />
);

export default router;