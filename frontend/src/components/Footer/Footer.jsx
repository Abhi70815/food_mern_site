import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className="image" src={assets.logo2} alt=""/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere et rerum doloribus veniam maiores? Rerum inventore, quos corrupti, omnis aliquid dolorum laudantium eaque qui accusamus nam fugit autem sapiente aut.</p>
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
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-8690658209</li>
                <li>jeetungaa79@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ jeetungaa.com - All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
