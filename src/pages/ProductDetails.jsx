import React from 'react'
import { Link } from 'react-router-dom'
import LoginNavBar from '../components/LoginNavBar'
import CompanyInfo from '../components/CompanyInfo'

const ProductDetails = () => {
  return (
    <div className='company'>
      <LoginNavBar />
      <div className="title-bar-portal fixed-top">
        <div className="title-portal">
          <a href="/"><i className="fas fa-arrow-left"></i></a> 
          <h1>Supplier Information</h1>
        </div>
      </div>
      <CompanyInfo />
      <div className="company-container">
        <div className="company-section">
          <div className="company-details">
            <h3>Irene Chemicals</h3>
            <div className="company-detail">
              <Link to='/company'>
                <h2>COMPANY DETAILS</h2>
              </Link>
              <div className='current'>
                <h2>PRODUCT DETALIS</h2>
                <div className="current-bar"></div>
              </div>
            </div>
            <table className='product'>
              <tr>
                <th>Classification:</th>
                <td>Chemicals</td>
              </tr>
              <tr>
                <th>Products Origin:</th>
                <td>Delta Srate</td>
              </tr>
              <tr>
                <th>CAS No:</th>
                <td>8339-35-7</td>
              </tr>
              <tr>
                <th>Type:</th>
                <td>Printing Ink</td>
              </tr>
              <tr>
                <th>Supply Ability:</th>
                <td>700kg per week</td>
              </tr>
            </table>
          </div>
        </div>
        <Link className="btn mrg btn-outline-primary">
        Explore as a supplier
        </Link>
      </div>
    </div>
  )
}

export default ProductDetails