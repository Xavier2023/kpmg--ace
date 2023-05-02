import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import LoginNavBar from '../components/LoginNavBar'
import ChemicalProducts from '../components/products/ChemicalProducts'
import SupplierForm from '../forms/SupplierForm'
import './Sectors.css'


const IndustrialSector = () => {
  const [ showContactUs, setshowContactUs ] = useState(false)

  const onShowClick = e => {
    setshowContactUs({showContactUs: !showContactUs})
  }
  return (
    <div className='sector'>
      <LoginNavBar />
      <div className="title-bar-portal">
        <div className="title-portal">
          <a href="/"><i className="fas fa-arrow-left"></i></a> 
          <h1>Chemical Products</h1>
        </div>
        <button className='btn button btn-outline-primary'> <Link to='/marketanalytics'>Market Analytics</Link></button>
        <p>Below are the list of companies in the Industrial Sector</p>  
      </div>
      {showContactUs ? (
        <SupplierForm />
      ) : null}
      <ChemicalProducts />
      <Link onClick={onShowClick} className="btn mrg btn-outline-primary">
        Explore as a supplier
      </Link>
    </div>
  )
}

export default IndustrialSector
