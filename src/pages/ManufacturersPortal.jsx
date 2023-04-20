import React from 'react'
import { Link } from 'react-router-dom'
import LoginNavBar from '../components/LoginNavBar'
import './manufacturerPortal.css'

const ManufacturersPortal = () => {
  return (
    <div>
      <LoginNavBar />
      <div className="title-bar-portal">
        <div className="title-portal">
          <a href="/"><i className="fas fa-arrow-left"></i></a> 
          <h1>Manufacturers Portal</h1>
        </div>
        <button className='btn-auction'>Auctions<i className="fa fa-bell"></i></button>
        <div className="navigation">
          <div className="active">
            <Link to='/manufacturersportal'>
              <h3>Find Supplier</h3>
              <div className="active-page"></div>
            </Link>
          </div>
          <Link to='/manufacturersportal/data&analysis'>
            <h3>Data and Analysis</h3>
          </Link>
          <Link to='manufacturersportal/supplychainconsultation'>
            <h3>Supply Chain Consultation</h3>
          </Link>
        </div>
        <button className="btn-logout">Log Out</button>
      </div>
      <div className="find-supplier-section">
        <div className="search-content">
          <h1>Find a Supplier in your sector</h1>
          <div className="search-bar">
            <form action="">
              <button type='submit' className='search'> <i className="fa fa-search"></i> </button>
              <input type="text" placeholder='Search Publications' name='search' />
              <button className='filter'> <i className="fa fa-filter"></i> </button>
            </form>
          </div>
        </div>
      </div>
      <div className="find-supplier-content">

      </div>
    </div>
  )
}

export default ManufacturersPortal
