import React from 'react';
import './footer.css';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">EOIN NOONAN</a>
      <hr/>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>
      <div className="footer-socials">

        <a href="https://facebook.com"><BsFacebook/> </a>
   
        <a href="https://instagram.com"><BsInstagram/></a>

        <a href="https://twitter.com"><BsTwitter/></a>
      </div>
      <div className="footer-copyright">
        <small>&copy; Noonan web development. All rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;