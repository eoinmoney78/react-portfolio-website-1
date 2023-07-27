import React from 'react'
import './contact.css';
import { MdEmail } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import {BsWhatsapp } from 'react-icons/bs';
const Contact = () => {
  return (
    <section id="contacts">
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
        <article className="contact-options">
          <MdEmail/>
          <h4>Email</h4>
          <h5>eoinnoonan8@gmail.com</h5>
          <a href="mailto:eoinnoonan@gmail.com" target="_blank">Send A Message</a>
        </article>

        <article className="contact-options">
          <FaFacebookMessenger/>
          <h4>Messanger</h4>
          <h5> Facebook messanger</h5>
          <a href="https://m.me/eoin.noonan.73" target="_blank">Send A Message</a>
        </article>

        <article className="contact-options">
      <BsWhatsapp/>
      <h4>Whats App</h4>
      <h5>18028554341</h5> 
      <a href="https://api.whatsapp.com/send?phone=18028554341" target="_blank">Send A Message</a>
</article>


        </div>
        {/* End Of Contact Options */}
        <form action="eoinyakyak@gmail.com"></form>
      </div>
    </section>
  )
}

export default Contact;  