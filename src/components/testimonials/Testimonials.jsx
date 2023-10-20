import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
// import AVTR2 from '../../assets/avatar2.jpg';
// import AVTR3 from '../../assets/avatar3.jpg';
// import AVTR4 from '../../assets/avatar4.jpg';

import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Jeremy woods',
    review: "Collaborating with Eoin on the development of our website dedicated to wooden artwork and custom wood pieces was nothing short of exceptional. Throughout the project, Eoin demonstrated a keen understanding of our brand, which is now beautifully encapsulated in the site's design. The layout is not only visually appealing but also user-friendly, ensuring our clients can effortlessly navigate and access our services. His meticulous attention to detail and intuitive design sense promises to amplify our site traffic and client interaction once we go live. Beyond his technical prowess, Eoin's professionalism and adherence to deadlines stood out, making the entire experience smooth and hassle-free. While the site is in its final stages of launching, I am already confident in recommending Eoin to anyone aiming to enhance their digital footprint."
  }
// {
//   avatar: AVTR2,
//   name: 'Tina Turner',
//   review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro necessitatibus fugiat, repellendus aliquam quisquam quos tenetur neque aspernatur eligendi minus enim culpa nobis quasi facilis.'
// },
// {
// avatar: AVTR3,
// name: 'Rickey Bobby',
// review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro necessitatibus fugiat, repellendus aliquam quisquam quos tenetur neque aspernatur eligendi minus enim culpa nobis quasi facilis.'
// },
// {
// avatar: AVTR4,
// name: 'dink Dinklage',
// review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro necessitatibus fugiat, repellendus aliquam quisquam quos tenetur neque aspernatur eligendi minus enim culpa nobis quasi facilis.'
// }
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