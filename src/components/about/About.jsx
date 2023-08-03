import React from 'react'
import './about.css';
import ME from '../../assets/eoin-dev.jpeg';
import{BsAward} from 'react-icons/bs';
import {FiUsers} from 'react-icons/fi';
import {BsFolderFill} from 'react-icons/bs';
const About = () => {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About Me</h2>
          
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
          <div className="about_content">
          <div className="about_cards">

            <article className="about_card">
              <BsAward className="about_icon"/>
            <h5>Experience</h5>
            <small>1 Plus Years working experience</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon"/>
            <h5>Clients</h5>
            <small>2 + </small>
            </article>

            <article className="about_card">
              <BsFolderFill className="about_icon"/>
            <h5>Projects</h5>
            <small>5 + </small>
            </article>
      </div>
        <p>
        Hi, I'm Eoin Noonan. I recently graduated from Burlington Code Academy in May, where I gained a strong foundation in full-stack web development. Since then, I have been actively freelancing to further enhance my skills and gain practical experience in the field.
 I am passionate about creating beautiful and functional websites that provide a great user experience. As a full-stack developer, I have expertise in both front-end and back-end technologies. From crafting intuitive user interfaces with modern frameworks to building robust server-side logic and APIs, I enjoy working on every aspect of web development.
Through my freelance projects, I have had the opportunity to work with a diverse range of clients, allowing me to tackle various challenges and continuously grow as a developer. Whether it's implementing complex database structures, optimizing application performance, or integrating third-party services, I thrive in solving problems and delivering efficient solutions.
If you have a project in mind or if you'd like to discuss any potential collaborations, feel free to reach out to me. Let's work together to create something remarkable! 
        </p>
        <a href="#contacts" className="btn btn-primary">Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;