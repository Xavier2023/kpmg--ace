import React from 'react'
import { Link } from 'react-router-dom'
import './payment.css'

const Payment = () => {
  return (
    <div>
      <div className="payment-section supplies">
        <div className="payment-container">
          <div className="payment-content">
            <h2>Payment</h2>
            <div className="btns">
              <button className="btn btn-1 btn-outline-primary"><Link to='/company'>Pay using Internet Banking</Link></button>
              <button className="btn btn-2 btn-outline-primary"><Link to='/company'>Pay using Debit Card</Link></button>
              <button className="btn btn-3 btn-outline-primary"><Link to='/company'>Take Loan</Link></button>
            </div>
          </div>
          <div className="submit-btn">
            <button className="btn btn-primary"><Link to='/company'>Previous</Link></button>
            <button className="btn btn-primary"><Link to=''>Proceed</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
