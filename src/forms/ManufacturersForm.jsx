import React, { useState } from "react";
import { toast } from "react-toastify";
import "./css/ManufacturerForm.css";
import Company from "../pages/Company";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";


const MANUFORM_URL = ('/api/v1/manuForm')



const ManufacturersForm = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');

  const navigate = useNavigate()


  const isValid=()=>{
    let isproceed = true;
    let errormessage;

    if(firstName===null || firstName===''){
      isproceed=false
      errormessage += ' First Name'
    }
    if(lastName===null || lastName===''){
      isproceed=false
      errormessage += ' Last Name'
    }
    if(email===null || email===''){
      isproceed=false
      errormessage += ' Email'
    }
    if(phoneNo===null || phoneNo===''){
      isproceed=false
      errormessage += ' Phone No'
    }
    if(company===null || company===''){
      isproceed=false
      errormessage += ' Company'
    }
    if(role===null || role===''){
      isproceed=false
      errormessage += ' Role'
    }
    if(industry==='Select Industry'){
      isproceed=false
      errormessage += ' Industry'
    }
    if(location==='Select Location'){
      isproceed=false
      errormessage += ' Location'
    }
    if(!isproceed){
      toast.warning(errormessage)
    }
    return isproceed
  } 


  const onSubmit  = async (e) => {
    e.preventDefault();
    if(isValid()) {
      try {
        const response = await axios.post(MANUFORM_URL, JSON.stringify({firstName, lastName, email, phoneNo, company, role, industry, location}), 
        {
          headers: { 'Content-Type' : 'application/json'}
        })
        console.log(JSON.stringify(response.data));
        toast.success('Added Successfully')
        navigate('/manufacturersportal')
  
      } catch (error) {
        
      }
  
      // console.log(firstName, lastName, email, phoneNo, company, role, industry, location);
    }
  }

  return (
    <div className="bg">
      <div className="Manufacturers-section">
        <div className="Manufacturer-content">
          <h1>Manufacturers Form</h1>
          <form className="form-section" action="">
            <div className="manufacturer-form">
              <div>
                <label htmlFor="name">First Name</label> <br />
                <input type="name" value={firstName} placeholder="Enter First Name" onChange={(e) => setFirstName(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="name">Last Name</label> <br />
                <input type="name" value={lastName} placeholder="Enter Last Name"  onChange={(e) => setLastName(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="email">Email Address:</label> <br />
                <input
                  type="email"
                  value={email}
                  placeholder="Enter Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone Number:</label> <br />
                <input
                  type="phone"
                  value={phoneNo}
                  placeholder="Enter Phone Number"
                  onChange={(e) => setPhoneNo(e.target.value)}

                />
              </div>

              <div>
                <label htmlFor="text">Company/Organization:</label> <br />
                <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Company/Organization" />
              </div>
              <div>
                <label htmlFor="text">Role:</label> <br />
                <input type="text" value={role} placeholder="Enter Role"  onChange={(e) => setRole(e.target.value)} />
              </div>
              <div>
                <label htmlFor="name">Industry</label> <br />
                <select value={industry}  onChange={(e) => setIndustry(e.target.value)} className="form-select">
                  <option value="Select Industry">
                    Select Industry
                  </option>
                  <option value="industry 1">industry 1</option>
                  <option value="industry 2">industry 2</option>
                </select>
              </div>
              <div>
                <label htmlFor="name">Location</label> <br />
                <select value={location} onChange={(e) => setLocation(e.target.value)} className="form-select">
                  <option value="Select Location">
                    Select Location
                  </option>
                  <option value="Location 1">Location 1</option>
                  <option value="Location 2">Location 2</option>
                </select>
              </div>
            </div>
            <div className="theButtons">
              <button className="btn btn-primary">Previous</button>
              <button onClick={onSubmit} className="btn btn-primary">Proceed</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManufacturersForm;
