import React from 'react'
import { Link } from 'react-router-dom'
import LoginNavBar from '../components/LoginNavBar'
import ChemicalProducts from '../components/products/ChemicalProducts'
import './Sectors.css'


const IndustrialSector = () => {
  return (
    <div className='sector'>
      <LoginNavBar />
      <div className="title-bar-portal">
        <div className="title-portal">
          <a href="/"><i className="fas fa-arrow-left"></i></a> 
          <h1>Chemical Products</h1>
        </div>
        <button className='btn button btn-outline-primary'> <Link to='/manufacturersportal/auctions'>Market Analytics</Link></button>
        <p>Below are the list of companies in the Industrial Sector</p>  
      </div>
      <ChemicalProducts />
      <Link className="btn mrg btn-outline-primary">
        Explore as a supplier
      </Link>
    </div>
  )
}

export default IndustrialSector
