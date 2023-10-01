import React from 'react';
import { BiCheck } from 'react-icons/bi';
import './services.css';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        
        {/* Start of UI/UX Design */}
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Creating user-centered design solutions that align with your business goals.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Offering a full suite of UX research services, including user testing and persona creation.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Designing intuitive and engaging user interfaces for both mobile and desktop applications.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Ensuring the highest level of usability and accessibility in every design project.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Offering design iteration and improvement based on user feedback and analytics.</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX Design */}
        
        {/* Start of Web Development */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Building responsive and accessible websites optimized for various devices and screen sizes.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Creating dynamic, interactive web applications using modern technologies such as React.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Offering custom CMS solutions to provide you full control over your website's content.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Providing eCommerce solutions to help you set up a secure and user-friendly online store.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Maintaining and updating existing websites to improve performance and security.</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}

      </div>
    </section>
  )
}

export default Services;
