import React from 'react'
import { Link } from 'react-router-dom'
import LoginNavBar from '../components/LoginNavBar'
import './contactsupplier.css'

const ContactSupplier = () => {
  return (
    <div>
      <LoginNavBar />
      <div className="title-bar-portal contact-supplier fixed-top">
        <div className="title-portal">
          <a href="/"><i className="fas fa-arrow-left"></i></a> 
          <h1>Contact Supplier</h1>
        </div>
        <p>Below are actions used to contact a supplier</p>
      </div>
      <div className="contact-supplier-section">
        <div className="contact-supplier-container">
          <h1>Select an Action</h1>
          <div className="contact-supplier-content">
            <div className="contact-supplier-request">
              <Link type='radio' className='request-bar'> <img></img> Request for Proposal</Link>
              <Link className='request-bar'> <img></img> Request for Information</Link>
              <Link className='request-bar'> <img></img> Request for Quotation</Link>
            </div>
            <div className="live-chat">
              <h2>Live Chat</h2>
              <div className="chat-box">
                <h4> <img></img>  Alpha Ayinde</h4>
              </div>
            </div>
          </div>
          <Link className="btn btn-primary btn-proceed">Proceed</Link>
        </div>
      </div>
    </div>
   
  )
}

export default ContactSupplier
