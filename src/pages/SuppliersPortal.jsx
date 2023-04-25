import React from 'react'
import LoginNavBar from '../components/LoginNavBar'
import { Link } from 'react-router-dom'
import './suppliersPortal.css'

const SuppliersPortal = () => {
  return (
    <div className='suppliers'>
      <LoginNavBar />
      <div className="title-bar-portal navbar fixed-top">
        <div className="title-portal">
          <a href="/"><i className="fas fa-arrow-left"></i></a> 
          <h1>Suppliers Portal</h1>
        </div>
        <button className="btn-logout"> 
          <Link to='/'>Log Out</Link> 
        </button>
      </div>
      <div className="supplier-dashboard">
        <div className="dashboard-header">
          <button className="btn-market"> 
            <Link to='/'>Market Analytics</Link> 
          </button>
          <h3>Dashboard</h3>
        </div>
        <div className="suppliers-section">
          <Link className="suppliers-container">
            <h2>Suppliers Dashboard</h2>
          </Link>
          <div className="suppliers-content">
            <Link className="supplier-card">
              <h3>Notifications</h3>
              <p>5</p>
            </Link>
            <Link className="supplier-card">
              <h3>Auctions</h3>
              <p>5</p>
            </Link>
            <Link className="supplier-card">
              <h3>Contracts</h3>
              <p>2</p>
            </Link>
            <Link className="supplier-card">
              <h3>Referrals</h3>
              <p>1</p>
            </Link>
            <Link className="supplier-card">
              <h3>Product Showcase</h3>
              <p>0</p>
            </Link>
            <Link className="supplier-card">
              <h3>RFx</h3>
              <p>0</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuppliersPortal
