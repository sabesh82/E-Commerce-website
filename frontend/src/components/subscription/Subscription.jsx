import React from 'react'
import './Subscription.css'

const Subscription = () => {
  return (
    <div className='subsrciption'>
        <div className="sub-box">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscibe to our news letter and stay updated </p>
        </div>
        <div className="sub-input-btn">
            <input type="email" placeholder='Your email id' />
            <button>Subscribe</button>
        </div>  
    </div>
  )
}

export default Subscription