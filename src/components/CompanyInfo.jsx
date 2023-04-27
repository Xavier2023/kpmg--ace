import React from 'react'
import { Link } from 'react-router-dom'

const CompanyInfo = () => {
  return (
    <div>
      <div className="company-info">
        <div className="company-dp"></div>
        <h1>Irene Chemicals</h1>
        <Link to='/contactsupplier' className='btn btn-primary'>Contact Supplier</Link>
      </div>
    </div>
  )
}

export default CompanyInfo
