import React from "react";
import "./css/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="dark">
      <div className="contact-section">
        <h1>Contact Us</h1>
        
        <form className="theForm" action="">
          <div class="formInputs">
            <div class="theInput">
              <label htmlFor="name">Inquiry Type</label> <br />
              <select id="inquiry" class="form-select">
                <option selected value="">
                  select inquiry type
                </option>
                <option value="inquiryType">inquiry Type 1</option>
                <option value="inquiryType">inquiry Type 2</option>
              </select>
            </div>
            <div class="theInput">
              <label htmlFor="name">Sector</label> <br />
              <select id="industry" class="form-select">
                <option selected value="">
                  select Sector
                </option>
                <option value="sectorType">Industrial Sector</option>
                <option value="sectorType">Manufacture Sector</option>
              </select>
            </div>
            <div class="theInput">
              <label htmlFor="name">Name</label>
              <input type="name" name="name" placeholder="Enter Name" />
            </div>
            <div class="theInput">
              <label for="text">Phone Number:</label> <br />
              <input type="text" id="phone" placeholder="enter Phone Number" />
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
              <label for="text">Role:</label> <br />
              <input type="text" id="role" placeholder="enter Role" />
            </div>
            <div class="theInput">
              <label for="text">Company/Organization:</label> <br />
              <input type="text" id="org" placeholder="enter Role" />
            </div>
            <div class="theInput">
              <label htmlFor="name">Are you a staff of KPMG</label> <br />
              <select id="inquiry" class="form-select">
                <option selected value="">
                  select
                </option>
                <option value="response">Yes</option>
                <option value="response">No</option>
              </select>
            </div>
            <div class="theInput">
              <label for="text">Message:</label> <br />
              <input type="text" id="mesage" placeholder="Type your message" />
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
  );
};

export default ContactUs;
