import React from 'react'
import { Link } from 'react-router-dom'
import './css/ManufacturerForm.css'

const ManufacturersForm = () => {
  return (
    <div className="dark">
      <div className='Manufacturers-section'>
      <h1>Manufacturers Form</h1>
      <div className="Manufacturer-content">
        <form className="left-side">
          <div className='form-group'>
            <label htmlFor="name">Firstname</label>
            <input type="text" name='name' placeholder='Enter Firstname' />
          </div>
          <div className='form-group'>
            <label htmlFor="email">Email Adderss</label>
            <input type="email" name='email'  placeholder='Enter Email Address' />
          </div>
          <div className='form-group'>
            <label htmlFor="name">Company/Organization</label>
            <input type="text" name='name'  placeholder='Enter Company/Organization '/>
          </div>
          <div className='form-group'>
            <label htmlFor="name">Select industry/Sector</label>
            <select name="sector" id="industry">
              <option value="select">Select</option>
              <option value="Agricultural Sector">Agricultural Sector</option>
              <option value="Industrial Sector">Industrial Sector</option>
            </select>
          </div>
          <button className='btn'>
          <Link to='/signup' >Pervious</Link>
          </button>
          
        </form>
        <form className="right-side">
          <div className='form-group'>
            <label htmlFor="name">Lastname</label>
            <input type="text" name='name'  placeholder='Enter Lastname '/>
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
            <label htmlFor="name">Select your Location</label>
            <select name="location" id="location">
              <option value="select">Select</option>
              <option value="Industrial Sector">Industrial Sector</option>
            </select>
          </div>
          <button className='btn'>
          <Link to='' >Proceed</Link>
          </button>
        </form>
      </div>
      </div>
    </div>
   
  )
}

export default ManufacturersForm
