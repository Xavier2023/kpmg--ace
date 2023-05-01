import React from 'react'
import './css/ContactUs.css'

const ContactUs = () => {
  return (
    <div className="dark">
      <div className='contact-section'>
      <h1>Contact Us</h1>
      <div className="contact-content">
        <form className="left-side">
          <div className='form-group'>
            <label htmlFor="name">Inquiry Type</label>
            <select name="inquiry" id="inquiry">
              <option value="select">Select</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor="name">Name</label>
            <input type="name" name='name'  placeholder='Enter Name' />
          </div>
          <div className='form-group'>
            <label htmlFor="email">Email Address</label>
            <input type="email" name='email'  placeholder='Enter Email Adress '/>
          </div>
          <div className='form-group'>
            <label htmlFor="name">Company/Organization</label>
            <input type="text" name='name'  placeholder='Enter Company/Organization '/>
          </div>
          <div className='form-group'>
            <label htmlFor="name">Are you a staff of KPMG?</label>
            <select name="staff" id="staffOf">
              <option value="select">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button className='btn'>
            Pervious
          </button>
          
        </form>
        <form className="right-side">
          <div className='form-group'>
            <label htmlFor="name">Select your Location</label>
            <select name="location" id="location">
              <option value="select">Select</option>
              <option value="Industrial Sector">Industrial Sector</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor="phone">Phone Number</label>
            <input type="phone" name='phone'  placeholder='Enter Phone Number ' />
          </div>
          <div className='form-group'>
            <label htmlFor="name">Role</label>
            <input type="text" name='name'  placeholder='Enter Role'/>
          </div>
          <div className='form-group'>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="26" rows="6"> Enter Message</textarea>
          </div>
          <input type="submit" value="Procced" className='btn'/>
        </form>
      </div>
      </div>
    </div>
   
  )
}

export default ContactUs