import React from 'react'
import { Link } from 'react-router-dom'
import LoginNavBar from '../components/LoginNavBar'
import DeliveryTime from '../components/charts&graphs/DeliveryTime'
import SupplierDefectRate from '../components/charts&graphs/SupplierDefectRate'
import Availability from '../components/charts&graphs/Availability'
import './comparesuppliers.css'

const CompareSuppliers = () => {
  return (
    <div>
      <LoginNavBar />
      <div className="title-bar-portal">
        <div className="title-portal">
          <a href="/"><i className="fas fa-arrow-left"></i></a> 
          <h1>Market Analytics</h1>
        </div>
        <button className='btn-logout'> <Link to='/'>Log Out</Link></button>
        <div className="navigation">
          <Link to='/marketanalytics'>
            <h3>Market Analytics</h3>
          </Link>
          <div className="active">
            <h3>Compare Suppliers</h3>
            <div className="active-page"></div>
          </div>
        </div> 
      </div>
      <div className="compare-supplier-section">
        <div className="compare-supplier-container">
          <div className="suppliers-names">
            <button className='btn btn-primary'> <Link to=''>Select Sector</Link></button>
            <div className="names">
              <h3>Sassy Farm</h3>
              <h3>Duke Ventures</h3>
              <h3>Grain World</h3>
              <h3>Musa and Isa farms</h3>
            </div>
          </div>
          <div className="charts">
            <DeliveryTime />
            <SupplierDefectRate />
          </div>
          <div className="graph">
            <Availability />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompareSuppliers
