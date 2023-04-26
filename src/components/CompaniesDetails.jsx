import React from 'react'
import { Link } from 'react-router-dom'
import './companies.css'

const CompaniesDetails = () => {
  return (
    <div>
      <div className="company-container">
        <div className="company-section">
          <div className="company-details">
            <h3>Irene Chemicals</h3>
            <div className="company-detail">
              <div className='current'>
                <h2>COMPANY DETAILS</h2>
                <div className="current-bar"></div>
              </div>
              <Link to='/company/product'>
                <h2>PRODUCT DETALIS</h2>
              </Link>
            </div>
            <table>
              <tr>
                <th>Business Type:</th>
                <td>Chemicals and Pharmaceuticals</td>
              </tr>
              <tr>
                <th>Main Products:</th>
                <td>Printing Inks</td>
              </tr>
              <tr>
                <th>Country/Region:</th>
                <td>Delta, Nigeria</td>
              </tr>
              <tr>
                <th>Year Established:</th>
                <td>2014</td>
              </tr>
              <tr>
                <th>Total Annual Revenue:</th>
                <td>Approx. 100,000 USD</td>
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

export default CompaniesDetails
