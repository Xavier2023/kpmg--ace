import React from 'react'
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import './Publications.css'


const Publictaion = () => {
  return (
    <div>
      <Navbar />
      <div className="line"></div>
      <div className="title-bar">
        <div className="title">
          <a href="/"><i class="fas fa-arrow-left"></i></a> 
          <h1>Publications</h1>
        </div>
        <div className="search-container">
          <form action="">
            <button type='submit' className='search'> <i className="fa fa-search"></i> </button>
            <input type="text" placeholder='Search Publications' name='search' />
            <button className='filter'> <i className="fa fa-filter"></i> </button>
          </form>
        </div>
      </div>
      <div className="publication-section">
        <div className="publication-content">
          <div className="content-1">
            <img />
            <h3>Customer-Centric Supply Chain</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="content-2">
            <img />
            <h3>Customer-Centric Supply Chain</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="content-3">
            <img />
            <h3>Customer-Centric Supply Chain</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="content-4">
            <img />
            <h3>Customer-Centric Supply Chain</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Publictaion
