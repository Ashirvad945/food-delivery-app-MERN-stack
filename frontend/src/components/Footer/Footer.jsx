import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer' >

    <div className="footer-content">
        <div className="footer-content-left">
       <img src={assets.logo} alt="" />
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quis totam qui est et accusantium facilis eos pariatur laudantium nihil!</p>
       <div className="footer-social-icons">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
       </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <li>+1-313-818-9803</li>
              <li>help@abcz@gmail.com</li>
        </div>
    </div>

    <hr />
    <p className="footer-copyright">
        copyrights@2025 tomato.com . All rights Reserved.
    </p>
      
    </div>
  )
}

export default Footer 
