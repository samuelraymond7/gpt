import React from 'react'
import gptlogo from '../../assets/logo.svg'
import './Footer.css'

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before the other</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className="gpt3__footer-links__logo">
          <img src={gptlogo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>

        <div className="gpt3__footer-links__div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links__div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Social Media</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links__div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>All right reserved.</p>
      </div>
    </div>
  )
}

export default Footer