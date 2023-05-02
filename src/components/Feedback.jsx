import React from 'react'
import { Link } from 'react-router-dom'
import './feedback.css'

const Feedback = () => {
  return (
    <div>
      <div className="feedback-section supplies">
        <div className="feedback-container">
          <div className="feedback-content">
            <div className="success-icon"></div>
            <h2>Transaction Successful</h2>
            <form action="">
              <input type="text" name='text' placeholder='Feedback' />
            </form>
            <div className="rate-us">
              <h3>Rate Us:</h3>
              <div className="star"></div>
            </div>
          </div>
          <button className="btn back btn-outline-primary"><Link to='/company'>Back to Homepage</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Feedback
