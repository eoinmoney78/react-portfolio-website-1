import React from 'react'
import './services.css';
import {BiCheck} from 'react-icons/bi';
const Services = () => {
  return (
    <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container services_container">
          <article className="service">
            <div className="service_head">
                <h3>UI/UX Design</h3>
            </div>
            <ul classNmae="service_list">
                <li>
                    <BiCheck className="service_list-icon"/>
                    <p>Lorem ipsum dolor, sit amet consectetur adip.</p>
                </li>
            </ul>
          </article>
        </div>
    </section>
  )
}

export default Services;