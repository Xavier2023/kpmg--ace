import React from 'react'
import { Link } from 'react-router-dom'
import LoginNavBar from '../components/LoginNavBar'

const MarketAnalytics = () => {
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
          <div className="active">
              <h3>Market Analytics</h3>
              <div className="active-page"></div>
          </div>
          <Link to='/comparesuppliers'>
            <h3>Compare Suppliers</h3>
          </Link>
         </div> 
      </div>
    </div>
  )
}

export default MarketAnalytics
