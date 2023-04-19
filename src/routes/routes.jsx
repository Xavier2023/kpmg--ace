import React from "react";
import LandingPage from "../Pages/Landing-Page";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ContactUs from "../forms/ContactUs";
import RequestForm from "../forms/RequestForm";
import ManufacturersForm from "../forms/ManufacturersForm";
import SupplierForm from "../forms/SupplierForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/RequestForm" element={<RequestForm />} />
      <Route path="/ManufacturesForm" element={<ManufacturersForm />} />
      <Route path="/SupplierForm" element={<SupplierForm />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
