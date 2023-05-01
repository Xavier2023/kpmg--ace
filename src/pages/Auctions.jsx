import React from 'react'
import { Link } from 'react-router-dom'
import LoginNavBar from '../components/LoginNavBar'
import './auctions.css'

const Auctions = () => {
  return (
    <div className='auction'>
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
      <div className="auction-container">
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
        <div className="auction-section">
          <div className="auction-content">
            <div className="search-bar">
              <form action="">
                <h3>Bids</h3>
                <button type='submit' className='search'> <i className="fa fa-search"></i> </button>
                <input type="text" placeholder='Search for bids by name' name='search' />
                <button className='filter'> <i className="fa fa-filter"></i> </button>
              </form>
            </div>
          </div>
          <div className="auction-table">
            <table>
              <tr>
                <th>SUPPLIER NAME</th>
                <th>HIRE DATE</th>
                <th>BID PRICE</th>
              </tr>
              <tr>
                <td>Jaye Farms</td>
                <td>New Supplier</td>
                <td>NGN 1,200,000</td>
              </tr>
              <tr>
                <td>Irene Chemicals</td>
                <td>Hired 3 <br /> Months Ago</td>
                <td>NGN 1,000,000</td>
              </tr>
              <tr>
                <td>Mabo palm Oil Company</td>
                <td>New Suppliers</td>
                <td>NGN 980,000</td>
              </tr>
              <tr className='last'>
                <td>Soxia Industries</td>
                <td>Hired 5 <br /> Months Ago</td>
                <td>NGN 1,450,000</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Auctions
