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
              <h3>Supply Chain Consultations</h3>
            <div className="active-page-supply"></div>
          </div> 
        </div>
        <button className="btn-logout"> <Link to='/'>Log Out</Link> </button>
      </div>
      <div className="supply-section">
        <div className="supply-title">
          <h1>Supply Chain</h1>
        </div>
        <div className="supply-container">
          <div className="supply-img"></div>
          <div className="supply-content">
            <p>
            KPMG ACE supports your transformation needs and designed to address challenges such as:
            Is my supply chain project centred on metrics for the customer experience?
            Does my entire supply chain operate as a single virtual company?
            Can I at any time access my entire demand and supply picture?
            How quickly can I spot possible supply continuity problems and take action?
            Actual demand or forecasted demand drives product movements?

            </p>
            <h2>With KPMG ACE you can benefit from:</h2>
            <ul>
              <li>A jump start to your digital supply chain transformation</li>
              <li>
                Immediate access to leading practices, processes and supply chain      servicedelivery models 
              </li>
              <li>Technology enabled efficiencies and insight</li>
              <li>A guided process with an array of supply chain assets and accelerators</li>
              <li>The ability to exploit micro supply chains to respond to change</li>
            </ul>
            <button className="btn btn-outline-primary">
              <Link to='/requestform'>Request a Proposal</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupplyChainConsultation
