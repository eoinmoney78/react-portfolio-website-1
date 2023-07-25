import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clinets</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">

         
        <article className="testimonial">
        
            <div className="client_avatar">
              <img src= {AVTR1} alt="Avatar one" />
            </div>
            <h5 className="client_name">Eoin Noonan</h5>
            <small className="client_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facere quidem itaque laboriosam sint cum ad numquam facilis culpa nulla.
            </small>
        
        </article>

              

            
        <article className="testimonial">
         
            <div className="client_avatar">

            <img src= {AVTR2} alt="Avatar two" />
            </div>
            <h5 className="client_name">Benny Blanco</h5>
            <small className="client_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facere quidem itaque laboriosam sint cum ad numquam facilis culpa nulla.
            </small>
          
        </article>

            
        <article className="testimonial">
          
            <div className="client_avatar">

            <img src= {AVTR3} alt="Avatar Three" />
            </div>
            <h5 className="client_name">Cat Stevens</h5>
            <small className="client_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facere quidem itaque laboriosam sint cum ad numquam facilis culpa nulla.
            </small>
        
        </article>

            
        <article className="testimonial">
        
            <div className="client_avatar">

            <img src= {AVTR4} alt="Avatar Four" />
            </div>
            <h5 className="client_name">Jim Jones</h5>
            <small className="client_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facere quidem itaque laboriosam sint cum ad numquam facilis culpa nulla.
            </small>
          
        </article>




      </div>
    </section>
  )
}

export default Testimonials;