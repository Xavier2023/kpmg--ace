import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import LoginNavBar from '../components/LoginNavBar'
import Feedback from '../components/Feedback'
import Payment from '../components/Payment'
import './contactsupplier.css'

const ContactSupplier = () => {
  const [ showFeedback, setshowFeedback ] = useState(false)
  const [ showPayment, setshowPayment ] = useState(false)

  const onShowClick = e => {
    setshowFeedback({showFeedback: !showFeedback})
  }  

  const onShowPayment = e => {
    setshowPayment({showPayment: !showPayment})
  }
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
      {showFeedback ? (
        <Feedback />
      ) : null}
      {showPayment ? (
        <Payment />
      ) : null}
      <div className="contact-supplier-section">
        <div className="contact-supplier-container">
          <h1>Select an Action</h1>
          <div className="contact-supplier-content">
            <div className="contact-supplier-request">
              <Link onClick={onShowClick} className='request-bar'> <img></img> Request for Proposal</Link>
              <Link onClick={onShowClick} className='request-bar'> <img></img> Request for Information</Link>
              <Link onClick={onShowClick} className='request-bar'> <img></img> Request for Quotation</Link>
            </div>
            <div className="live-chat">
              <h2>Live Chat</h2>
              <div className="chat-box">
                <h4> <img></img>  Alpha Ayinde</h4>
              </div>
            </div>
          </div>
          <Link onClick={onShowPayment} className="btn btn-primary btn-proceed">Proceed</Link>
        </div>
      </div>
    </div>
   
  )
}

export default ContactSupplier
