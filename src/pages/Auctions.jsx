import React from 'react'
import { Link } from 'react-router-dom'
import LoginNavBar from '../components/LoginNavBar'
import './auctions.css'

const Auctions = () => {
  return (
    <div>
      <LoginNavBar />
      <div className="title-bar-portal">
        <div className="title-portal">
          <a href="/"><i className="fas fa-arrow-left"></i></a> 
          <h1>Auctions</h1>
        </div>
        <button className="btn-logout"> 
          <Link to='/'>Log Out</Link> 
        </button>
      </div>
      <div className="side-nav">
        <div className="side-nav-content">
          <Link className='icon'>
            <i class="fa fa-pen"></i>
            <h4>Create Auction</h4>
          </Link>
          <Link className='icon icon-active'>
            <img></img>
            <h4>Manage Bids</h4>
          </Link>
          <Link className='icon'>
            <i class="fa fa-hard-drive"></i>
            <h4>Saved Suppliers</h4>
          </Link>
          <Link className='icon'>
            <i class="fas fa-list-ul"></i>
            <h4>Shortlisted Bids</h4>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Auctions
