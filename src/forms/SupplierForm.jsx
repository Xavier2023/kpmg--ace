import React from 'react'
import './css/supplierform.css'

const SupplierForm = () => {

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [address, setAddress] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [lastName, setLastName] = useState('');
  const [product, setProduct] = useState('');

  return (
    <div className='supplies'>
      <div className="supplier-section">
        <h1>Local Suppliers Form</h1>
        <div className="supplier-content">
          <form className='name'>
          <div className='firstname'>
            <label htmlFor="name">Firstname</label>
            <input type="text" name='name' value={firstName} placeholder='Enter Firstname'/>
          </div>
          <div className='lastname'>
            <label htmlFor="name">Lastname</label>
            <input type="text" name='name' value={lastName} placeholder='Enter Lastname'/>
          </div>
          </form>
          <form className='business'>
            <div>
              <label htmlFor="name">Business Name</label>
              <input type="text" name='name' value={businessName} placeholder='Enter Business Name'/>
            </div>
          </form>
          <form className='contact'>
            <div className='email'>
              <label htmlFor="email">Email Address</label>
              <input type="email" name='email' value={email} placeholder='Enter Emaill Address'/>
            </div>
            <div className='phone'>
              <label htmlFor="phone">Phone Number</label>
              <input type="phone" name='phone' value={phone} placeholder='Enter Phone Number'/>
            </div>
          </form>
          <form className='company'>
            <div>
              <label htmlFor="name">Company Address</label>
              <input type="text" name='name' value={address} placeholder='Enter Company Address'/>
            </div>
          </form>
          <form className='last-form'>
            <div className='website'>
              <label htmlFor="name">Business website</label>
              <input type="text" name='name' value={website} placeholder='Enter Business Website'/>
            </div>
            <div className='category'>
              <label htmlFor="phone">Select Product Category</label>
              <select name="product" value={product}>
                <option value="select">Select</option>
              </select>
            </div>
          </form>
          <div className="button">
            <button className="btn btn-previous btn-primary"><Link href="">Previous</Link></button>
            <button className='btn btn-primary'>
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupplierForm
