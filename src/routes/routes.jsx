import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import React from "react";
import LandingPage from "../pages/Landing-Page";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ContactUs from "../forms/ContactUs";
import RequestForm from "../forms/RequestForm";
import ManufacturersForm from "../forms/ManufacturersForm";
import SupplierForm from "../forms/SupplierForm";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route>
      <Route index element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/requestform" element={<RequestForm />} />
      <Route path="/manufacturesform" element={<ManufacturersForm />} />
      <Route path="/supplierform" element={<SupplierForm />} />
      {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
  )
);

export default router;
