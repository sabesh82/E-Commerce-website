import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import insta from '../../assets/instagram_icon.png'
import whatsapp from '../../assets/whatsapp_icon.png'
import pintester from '../../assets/pintester_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-logo-menu">
            <li>Company</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className="footer-icons">
            <div className="social">
                <img src={insta} alt="" />
            </div>
            <div className="social">
                <img src={whatsapp} alt="" />
            </div>
            <div className="social">
                <img src={pintester} alt="" />
            </div>
        </div>
        <hr/>
        <div className="copyright">
            <p>All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer