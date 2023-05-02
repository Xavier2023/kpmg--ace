import React from "react";
import { Link } from "react-router-dom";
import "./css/ManufacturerForm.css";

const ManufacturersForm = () => {
  return (
    <div className="dark">
      <div className="Manufacturers-section">
        <h1>Manufacturers Form</h1>
        <div className="Manufacturer-content">
          {/* <form className="left-side">
            <div className="form-group">
              <label htmlFor="name">Firstname</label>
              <input type="text" name="name" placeholder="Enter Firstname" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Adderss</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Company/Organization</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Company/Organization "
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Select industry/Sector</label>
              <select name="sector" id="industry">
                <option value="select">Select</option>
                <option value="Agricultural Sector">Agricultural Sector</option>
                <option value="Industrial Sector">Industrial Sector</option>
              </select>
            </div>
            <button className="btn">
              <Link to="/signup">Pervious</Link>
            </button>
          </form>
          <form className="right-side">
            <div className="form-group">
              <label htmlFor="name">Lastname</label>
              <input type="text" name="name" placeholder="Enter Lastname " />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="phone"
                name="phone"
                placeholder="Enter Phone Number "
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Role</label>
              <input type="text" name="name" placeholder="Enter Role" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Select your Location</label>
              <select name="location" id="location">
                <option value="select">Select</option>
                <option value="Industrial Sector">Industrial Sector</option>
              </select>
            </div>
            <button className="btn">
              <Link to="/manufacturersportal">Proceed</Link>
            </button>
          </form> */}
          <form className="theForm" action="">
            <div class="formInputs">
              <div class="theInput">
                <label htmlFor="name">First Name</label>
                <input type="name" name="name" placeholder="Enter First Name" />
              </div>
              <div class="theInput">
                <label htmlFor="name">Last Name</label>
                <input type="name" name="name" placeholder="Enter Last Name" />
              </div>
              <div class="theInput">
                <label for="text">Email Address:</label> <br />
                <input
                  type="text"
                  id="emailAddress"
                  placeholder="enter Email Address"
                />
              </div>
              <div class="theInput">
                <label for="text">Phone Number:</label> <br />
                <input
                  type="text"
                  id="phone"
                  placeholder="enter Phone Number"
                />
              </div>

              <div class="theInput">
                <label for="text">Company/Organization:</label> <br />
                <input type="text" id="org" placeholder="enter Role" />
              </div>
              <div class="theInput">
                <label for="text">Role:</label> <br />
                <input type="text" id="role" placeholder="enter Role" />
              </div>
              <div class="theInput">
                <label htmlFor="name">Industry</label> <br />
                <select id="inquiry" class="form-select">
                  <option selected value="">
                    select industry
                  </option>
                  <option value="inquiryType">industry 1</option>
                  <option value="inquiryType">industry 2</option>
                </select>
              </div>
              <div class="theInput">
                <label htmlFor="name">Location</label> <br />
                <select id="industry" class="form-select">
                  <option selected value="">
                    select Location
                  </option>
                  <option value="LocationType">Location 1</option>
                  <option value="LocationType">Location 2</option>
                </select>
              </div>
            </div>
            <div className="theButtons">
              <button type=" " class="btn-outline-secondary" id="cancelBtn">
                Cancel
              </button>
              <button type="submit" class="primary-btn" id="btn">
                Sumbit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManufacturersForm;
