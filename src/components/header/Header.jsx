import React from 'react'
import './header.css';
import CTA from '../Cta';

import Headersocials from './Headersocials';
const Header = () => {
  return (
   <header>
    <div id ="home" className="container header_container">
        
        <h5>Hello my name is</h5>
        <h1>Eoin Noonan</h1>
        <h5 className="text-light">
            Full Stack Developer
        </h5>
        <CTA />
        <Headersocials/>
        <div className="me">
           
            <a href="#contacts" className="scroll_down">Scroll Down</a>
        </div>
        
        </div>    
   </header>
  )
}

export default Header;