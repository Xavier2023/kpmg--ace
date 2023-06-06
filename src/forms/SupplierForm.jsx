import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/supplierform.css'
import axios from '../api/axios';

const SupplierForm = () => {
 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [business, setBusiness] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [website, setWebsite] = useState('');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');

  const SUPPFORM_URL = ('/api/V1/suppForm')




  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(SUPPFORM_URL, JSON.stringify({firstName, lastName, email, business, phoneNo, website, company, category}), 
      {
        headers: {'Content-Type' : 'application/json'}
      })
      console.log(JSON.stringify(response.data));
    } catch (error) {
      
    }

    console.log(firstName, lastName, email, business, phoneNo, website, company, category);
  }



  return (
    <div className='supplies'>
      <div className="supplier-section">
        <h1>Local Suppliers Form</h1>
        <div className="supplier-content">
          <form className='name'>
          <div className='firstname'>
            <label htmlFor="name">Firstname</label>
            <input 
              type="text" 
              name='name' 
              value={firstName} 
              placeholder='Enter Firstname'
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='lastname'>
            <label htmlFor="name">Lastname</label>
            <input 
              type="text" 
              name='name' 
              value={lastName} 
              placeholder='Enter Lastname'
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          </form>
          <form className='business'>
            <div>
              <label htmlFor="name">Business Name</label>
              <input 
                type="text" 
                name='name' 
                value={business} 
                placeholder='Enter Business Name'
                onChange={(e) => setBusiness(e.target.value)}
              />
            </div>
          </form>
          <form className='contact'>
            <div className='email'>
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                name='email' value={email} 
                placeholder='Enter Emaill Address'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='phone'>
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="phone" 
                name='phone' 
                value={phoneNo} 
                placeholder='Enter Phone Number'
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
          </form>
          <form className='company'>
            <div>
              <label htmlFor="name">Company Address</label>
              <input 
                type="text" 
                name='name' 
                value={company} 
                placeholder='Enter Company Address'
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          </form>
          <form className='last-form'>
            <div className='website'>
              <label htmlFor="name">Business website</label>
              <input 
                type="text" 
                name='name' 
                value={website} 
                placeholder='Enter Business Website'
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            <div className='category'>
              <label htmlFor="phone">Select Product Category</label>
              <select name="product" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="select">Select</option>
              </select>
            </div>
          </form>
          <div className="button">
            <button className="btn btn-previous btn-primary"><Link href="">Previous</Link></button>
            <button 
              className='btn btn-primary'
              onClick={onSubmit}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupplierForm
