import React from 'react'
import './header.css';
import CTA from '../Cta';
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
        
        </div>    
   </header>
  )
}

export default Header;