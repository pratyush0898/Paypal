import React from 'react'
import Background from '/welcome-background.webp'
import Payments from '/payments.png'
import './Welcome.css'

const Welcome = ({ Login }) => {
  return (
    <div className="welcome" onClick={Login}>
        <div className="text">
            <h1>Accept payments for your online business at zero cost!</h1>
            <p>Singup for PayPal Payment Gateway!</p>
            <button>Get started</button>
        </div>
        <div className="image">
            <img src={Payments} alt="" />
        </div>
    </div>
  )
}

export default Welcome
