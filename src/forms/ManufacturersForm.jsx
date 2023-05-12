import React, { useState } from "react";
import "./css/ManufacturerForm.css";


const ManufacturersForm = () => {

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [org, setOrg] = useState('');
  const [role, setRolw] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="bg">
      <div className="Manufacturers-section">
        <div className="Manufacturer-content">
          <h1>Manufacturers Form</h1>
          <form className="form-section" action="">
            <div className="manufacturer-form">
              <div>
                <label htmlFor="name">First Name</label> <br />
                <input type="name" value={firstName} placeholder="Enter First Name" />
              </div>
              <div>
                <label htmlFor="name">Last Name</label> <br />
                <input type="name" value={lastName} placeholder="Enter Last Name" />
              </div>
              <div>
                <label htmlFor="email">Email Address:</label> <br />
                <input
                  type="email"
                  value={email}
                  placeholder="Enter Email Address"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone Number:</label> <br />
                <input
                  type="phone"
                  value={phone}
                  placeholder="Enter Phone Number"
                />
              </div>

              <div>
                <label htmlFor="text">Company/Organization:</label> <br />
                <input type="text" value={org} placeholder="Enter Company/Organization" />
              </div>
              <div>
                <label htmlFor="text">Role:</label> <br />
                <input type="text" value={role} placeholder="Enter Role" />
              </div>
              <div>
                <label htmlFor="name">Industry</label> <br />
                <select value={inquiry} class="form-select">
                  <option selected value="">
                    Select Industry
                  </option>
                  <option value="inquiryType">industry 1</option>
                  <option value="inquiryType">industry 2</option>
                </select>
              </div>
              <div>
                <label htmlFor="name">Location</label> <br />
                <select value={location} class="form-select">
                  <option selected value="">
                    Select Location
                  </option>
                  <option value="LocationType">Location 1</option>
                  <option value="LocationType">Location 2</option>
                </select>
              </div>
            </div>
            <div className="theButtons">
              <button className="btn btn-primary">Previous</button>
              <button className="btn btn-primary">Proceed</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManufacturersForm;
