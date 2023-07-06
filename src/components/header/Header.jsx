import React from 'react'
import './header.css';
import CTA from '../Cta';
import ME from '../../assets/me.jpg';
import Headersocials from './Headersocials';
const Header = () => {
  return (
   <header>
    <div className="container header_container">
        
        <h5>Hello my name is</h5>
        <h1>Eoin Noonan</h1>
        <h5 className="text-light">
            Full Stack Developer
        </h5>
        <CTA />
        <Headersocials/>
        <div className="me">
            <img src={ME} alt="me" />
            <a href="#contacts" className="scroll_down">Scroll Down</a>
        </div>
        
        </div>    
   </header>
  )
}

export default Header;