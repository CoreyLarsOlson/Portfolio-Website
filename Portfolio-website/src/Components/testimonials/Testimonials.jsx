import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";

// import Swiper core and required modules
import { Pagination,  } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: "White Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nemo ut",
  },
  {
    avatar: AVTR2,
    name: "Palm Forest",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nemo ut",
  },
  {
    avatar: AVTR3,
    name: "Ocean Coast",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nemo ut",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
       // install Swiper modules
       modules={[ Pagination ]}
       spaceBetween={40}
       slidesPerView={1}
       
       pagination={{ clickable: true }}
      
       >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
