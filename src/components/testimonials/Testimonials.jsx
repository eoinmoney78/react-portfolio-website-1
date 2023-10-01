import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Jeremy woods',
    review: 'Working with Eoin on our cabinet refacing website was a game-changer. The site not only captures the essence of our brand but also makes it easier for our clients to navigate and book services. The attention to detail, coupled with an intuitive design, has led to increased traffic and client engagement. I appreciate the professionalism and timely delivery. Highly recommended for anyone looking to elevate their online presence.'
  },
{
  avatar: AVTR2,
  name: 'Tina Turner',
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro necessitatibus fugiat, repellendus aliquam quisquam quos tenetur neque aspernatur eligendi minus enim culpa nobis quasi facilis.'
},
{
avatar: AVTR3,
name: 'Rickey Bobby',
review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro necessitatibus fugiat, repellendus aliquam quisquam quos tenetur neque aspernatur eligendi minus enim culpa nobis quasi facilis.'
},
{
avatar: AVTR4,
name: 'dink Dinklage',
review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro necessitatibus fugiat, repellendus aliquam quisquam quos tenetur neque aspernatur eligendi minus enim culpa nobis quasi facilis.'
}
];



const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clinets</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials;