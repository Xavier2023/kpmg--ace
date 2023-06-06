import React, { useState } from "react";
import "./css/ContactUs.css";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";


const CONTACTUS_URL = ('/api/v1/contact_us')

const ContactUs = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [inquiry, setInquiry] = useState('')
  const [location, setLocation] = useState('')
  const [staff, setStaff] = useState('')
  const [message, setMessage] = useState('')


  const navigate = useNavigate()


  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post( CONTACTUS_URL, JSON.stringify({name, email, phoneNo, location, company, role, inquiry, staff, message}),
      {
        headers: { 'Content-Type' : 'application/json' }
      })
      console.log(JSON.stringify(response.data));
    } catch (error) {
      
    }

    navigate('/')
    console.log(name, email, phoneNo, location, company, role, inquiry, staff, message);

  }

  return (
    <div className="dark">
      <div className="contact-section">
        <h1>Contact Us</h1>

        <form className="theForm" action="">
          <div className="formInputs">
            <div className="theInput">
              <label htmlFor="name">Inquiry Type</label> <br />
              <select
                 onChange={ e => setInquiry(e.target.value)} 
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
              <label htmlFor="name">Select Your Location</label> <br />
              <select
                 onChange={ e => setLocation(e.target.value)}
                value={location} 
                class="form-select"
              >
                <option selected value="Select Sector">
                  Select
                </option>
                <option value="Lagos">Lagos</option>
                <option value="Abuja">Abuja</option>
              </select>
            </div>
            <div className="theInput">
              <label htmlFor="name">Name</label> <br />
              <input 
                type="name" 
                onChange={ e => setName(e.target.value)}
                value={name} 
                placeholder="Enter Name" 
              />
            </div>
            <div className="theInput">
              <label htmlFor="phone">Phone Number:</label> <br />
              <input 
                type="text"
                onChange={ e => setPhoneNo(e.target.value)} 
                value={phoneNo} 
                placeholder="Enter Phone Number" 
              />
            </div>
            <div className="theInput">
              <label htmlFor="email">Email Address:</label> <br />
              <input
                type="email"
                onChange={ e => setEmail(e.target.value)}
                value={email}
                placeholder="Enter Email Address"
              />
            </div>

            <div className="theInput">
              <label htmlFor="text">Role:</label> <br />
              <input 
                type="text"
                onChange={ e => setRole(e.target.value)}
                value={role} placeholder="Enter Role" />
            </div>
            <div className="theInput flex">
              <div>
                <label htmlFor="text">Company/Organization:</label> <br />
                <input 
                  type="text" 
                  onChange={ e => setCompany(e.target.value)}
                  value={company} 
                  placeholder="Enter Company/Organization" />
              </div>
              <div>
                <label htmlFor="name">Are you a staff of KPMG</label> <br />
                <select 
                  value={staff} 
                  className="form-select"
                  onChange={ e => setStaff(e.target.value)}
                >
                  <option value="select">
                    Select
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
            <div className="theInput">
            <label htmlFor="text">Message:</label> <br />
            <textarea
              value={message}
              onChange={ e => setMessage(e.target.value)}
              name="mesage"
              cols="18"
              placeholder="Enter message"
              rows="5"
            ></textarea>
          </div>
          </div>
          <div className="theButtons">
            <button className="btn btn-primary" >Previous</button>
            <button 
              className="btn btn-primary"
              onClick={onSubmit}
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
