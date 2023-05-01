import React from 'react'
import './css/supplierform.css'

const SupplierForm = () => {
  return (
    <div className='supplies'>
      <div className="supplier-section">
        <h1>Local Suppliers Form</h1>
        <div className="supplier-content">
          <form className='name'>
          <div className='firstname'>
            <label htmlFor="name">Firstname</label>
            <input type="text" name='name' placeholder='Enter Firstname'/>
          </div>
          <div className='lastname'>
            <label htmlFor="name">Lastname</label>
            <input type="text" name='name' placeholder='Enter Lastname'/>
          </div>
          </form>
          <form className='business'>
            <div>
              <label htmlFor="name">Business Name</label>
              <input type="text" name='name' placeholder='Enter Business Name'/>
            </div>
          </form>
          <form className='contact'>
            <div className='email'>
              <label htmlFor="email">Email Address</label>
              <input type="email" name='email' placeholder='Enter Emaill Address'/>
            </div>
            <div className='phone'>
              <label htmlFor="phone">Phone Number</label>
              <input type="phone" name='phone' placeholder='Enter Phone Number'/>
            </div>
          </form>
          <form className='company'>
            <div>
              <label htmlFor="name">Company Address</label>
              <input type="text" name='name' placeholder='Enter Company Address'/>
            </div>
          </form>
          <form className='last-form'>
            <div className='website'>
              <label htmlFor="name">Business website</label>
              <input type="text" name='name' placeholder='Enter Business Website'/>
            </div>
            <div className='category'>
              <label htmlFor="phone">Select Product Category</label>
              <select name="product" id="product">
                <option value="select">Select</option>
              </select>
            </div>
          </form>
          <div className="button">
            <div className="btn btn-previous btn-primary"><a href="">Previous</a></div>
            <form action="">
              <input className='btn btn-primary' type="submit" value="Proceed" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupplierForm
