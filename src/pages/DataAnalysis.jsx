import React from 'react'
import { Link } from 'react-router-dom'
import LoginNavBar from '../components/LoginNavBar'
import './manufacturerPortal.css'

const DataAnalysis = () => {
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
          <div className="active">
            <h3>Data and Analysis</h3>
            <div className="active-page-data"></div>
          </div>
          <Link to='/manufacturersportal/supplychainconsultation'>
            <h3>Supply Chain Consultations</h3>
          </Link>
        </div>
        <button className="btn-logout"> 
          <Link to='/'>Log Out</Link> 
        </button>
      </div>
      <div className="data-section">
        <div className="data-title">
          <h1>Data and Analytics Consulting Services</h1>
        </div>
        <div className="data-container">
          <div className="data-img"></div>
          <div className="data-content">
            <p>
              Our data analytics consultants work with you throughout the data and analytics lifecycle, from strategy to implementation, so you can make sense of your data and utilise it to solve challenging business problems.
            </p>
            <h2>With KPMG ACE you can benefit from:</h2>
            <ul>
              <li>Data analytics expertise</li>
              <li>Big data consulting since 2013</li>
              <li>Domain exprience in 30 industrie, including manufacturing, energy, retail and wholesale,  professional services, healthcare, financial services, transportation and logistics telecommunications.</li>
            </ul>
            <button className="btn btn-outline-primary">
              <Link to='/requestform'>Request a Proposal</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataAnalysis
