import React from 'react'
import { Link } from 'react-router-dom'
import LoginNavBar from '../components/LoginNavBar'
import './manufacturerPortal.css'

const SupplyChainConsultation = () => {
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
          <Link to='/manufacturersportal'>
            <h3>Find Supplier</h3>
          </Link>
          <Link to='/manufacturersportal/data&analysis'>
            <h3>Data and Analysis</h3>
          </Link>
          <div className="active">
            <Link to='/manufacturersportal/supplychainconsultation'>
              <h3>Supply Chain Consultation</h3>
            </Link> 
            <div className="active-page-supply"></div>
          </div> 
        </div>
        <button className="btn-logout">Log Out</button>
      </div>
    </div>
  )
}

export default SupplyChainConsultation
