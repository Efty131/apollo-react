import React, { useEffect } from 'react';

import Swiper from 'swiper';
import CourseImg1 from '../images/course-1.svg';
import CourseImg2 from '../images/course-2.svg';
import CourseImg3 from '../images/course-3.svg';
import CourseImg4 from '../images/course-4.svg';
import CourseImg5 from '../images/course-5.svg';
import CourseImg6 from '../images/course-6.svg';

const Courses = () => {
  useEffect(() => {
    new Swiper('.course-slider', {
      spaceBetween: 20,
      grabCursor: true,
      loop: true,
      pagination: {
        el: '.swiperPagination',
        clickable: true,
      },
      breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

  return (
    <section className="courses" id="courses">
      <h1 className="heading">
        our <span>courses</span>
      </h1>
      <div className="swiper course-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide slide">
            <img src={CourseImg1} alt="img" />
            <h3>web development</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!
            </p>
          </div>
          <div className="swiper-slide slide">
            <img src={CourseImg2} alt="img" />
            <h3>Digital Marketing</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!
            </p>
          </div>
          <div className="swiper-slide slide">
            <img src={CourseImg3} alt="img" />
            <h3>Science And Biology</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!
            </p>
          </div>
          <div className="swiper-slide slide">
            <img src={CourseImg4} alt="img" />
            <h3>Graphic Design</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!
            </p>
          </div>
          <div className="swiper-slide slide">
            <img src={CourseImg5} alt="img" />
            <h3>Teaching</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!
            </p>
          </div>
          <div className="swiper-slide slide">
            <img src={CourseImg6} alt="img" />
            <h3>Engineering</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!
            </p>
          </div>

        </div>
        <div className="swiperPagination"></div>
      </div>
    </section>
  )
}

export default Courses;