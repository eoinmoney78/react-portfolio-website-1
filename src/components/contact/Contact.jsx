import React from 'react'
import './contact.css';
import { MdEmail } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import {BsWhatsapp } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';

import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b95380b', 'template_ip77w5d', form.current, 'iWCrP9nhR0iqCjX60')
    e.target.reset();
   
  };

  return (
    <section id="contact">
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
        <article className="contact-option">
          <MdEmail className="contact-option-icon"/>
          <h4>Email</h4>
          <h5>eoinnoonan8@gmail.com</h5>
          <a href="mailto:woodenreverie@yahoo.com" target="_blank">Send A Message</a>
        </article>

        <article className="contact-option">
          <FaFacebookMessenger className="contact-option-icon"/>
          <h4>Messanger</h4>
          <h5> Facebook messanger</h5>
          <a href="https://m.me/eoin.noonan.73" target="_blank">Send A Message</a>
        </article>

        <article className="contact-option">
  <FaInstagram className="contact-option-icon" />
  <h4>Instagram</h4>
  <h5>Your Instagram Handle</h5>
  <a
    href="https://www.instagram.com/eoinmoney78"
    target="_blank"
    rel="noopener noreferrer"
  >
    Visit Profile
  </a>
</article>


        </div>
        {/* End Of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name'/>
          <input type="email" name="email" placeholder="Your Email"  required />
          <textarea name="message" rows="7" placeholder="Your Message" required/>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;  