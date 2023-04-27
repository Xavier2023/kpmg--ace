import React from 'react'
import LoginNavBar from '../components/LoginNavBar'
import CompaniesDetails from '../components/CompaniesDetails'
import CompanyInfo from '../components/CompanyInfo'


const Company = () => {
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
      <CompaniesDetails />
    </div>
  )
}

export default Company
