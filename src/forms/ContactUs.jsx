import React, { useState } from "react";
import "./css/ContactUs.css";

const ContactUs = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [org, setOrg] = useState('')
  const [role, setRolw] = useState('')
  const [inquiry, setInquiry] = useState('')
  const [sector, setSector] = useState('')
  const [staff, setStaff] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className="dark">
      <div className="contact-section">
        <h1>Contact Us</h1>

        <form className="theForm" action="">
          <div className="formInputs">
            <div className="theInput">
              <label htmlFor="name">Inquiry Type</label> <br />
              <select
                 // onChange={} 
                value={inquiry} 
                class="form-select"
              >
                <option selected value="">
                  Select Inquiry Type
                </option>
                <option value="inquiryType">inquiry Type 1</option>
                <option value="inquiryType">inquiry Type 2</option>
              </select>
            </div>
            <div className="theInput">
              <label htmlFor="name">Sector</label> <br />
              <select
                 // onChange={} 
                value={sector} 
                class="form-select"
              >
                <option selected value="Select Sector">
                  Select Sector
                </option>
                <option value="sectorType">Industrial Sector</option>
                <option value="sectorType">Manufacture Sector</option>
              </select>
            </div>
            <div className="theInput">
              <label htmlFor="name">Name</label> <br />
              <input 
                type="name" 
                // onChange={}
                value={name} 
                placeholder="Enter Name" 
              />
            </div>
            <div className="theInput">
              <label htmlFor="phone">Phone Number:</label> <br />
              <input 
                type="text"
                 // onChange={} 
                value={phone} 
                placeholder="Enter Phone Number" 
              />
            </div>
            <div className="theInput">
              <label for="text">Email Address:</label> <br />
              <input
                type="text"
                // onChange={}
                value={email}
                placeholder="Enter Email Address"
              />
            </div>

            <div className="theInput">
              <label for="text">Role:</label> <br />
              <input 
                type="text"
                // onChange={} 
                value={role} placeholder="Enter Role" />
            </div>
            <div className="theInput flex">
              <div>
                <label for="text">Company/Organization:</label> <br />
                <input 
                  type="text" 
                  // onChange={}
                  value={org} 
                  placeholder="Enter Company/Organization" />
              </div>
              <div>
                <label htmlFor="name">Are you a staff of KPMG</label> <br />
                <select 
                  value={staff} 
                  class="form-select"
                  // onChange={}
                >
                  <option selected value="select">
                    Select
                  </option>
                  <option value="response">Yes</option>
                  <option value="response">No</option>
                </select>
              </div>
            </div>
            <div className="theInput">
            <label for="text">Message:</label> <br />
            <textarea
              value={message}
              // onChange={}
              name="mesage"
              cols="18"
              placeholder="Enter message"
              rows="5"
            ></textarea>
          </div>
          </div>
          <div className="theButtons">
            <button class="btn btn-primary" >Previous</button>
            <button 
              class="btn btn-primary"
              // onSubmit={}
            >
              Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
