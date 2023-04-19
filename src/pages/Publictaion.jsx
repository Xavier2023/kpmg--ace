import React from 'react'
import Navbar from "../components/navbar";
import Featured from '../components/publications/Featured';
import JustForYou from '../components/publications/JustForYou';
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
        <Featured />
        <JustForYou />
        <Footer />
      </div>
    </div>
  )
}

export default Publictaion
