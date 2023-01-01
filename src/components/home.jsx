import React from 'react';

import Header from './header';
import HomeImg from '../images/home-img.svg';
import AboutImg from '../images/about-img.svg';
import CourseImg1 from '../images/course-1.svg';
import CourseImg2 from '../images/course-2.svg';
import CourseImg3 from '../images/course-3.svg';
import CourseImg4 from '../images/course-4.svg';
import CourseImg5 from '../images/course-5.svg';
import CourseImg6 from '../images/course-6.svg';

const home = () => {
  return (
    <div>
        <Header />

        {/* home section start */}
        <section className="home" id="home">

   <div className="row">

      <div className="content">
         <h3>online <span>education</span></h3>
         <a href="#contact" className="btn">contact us</a>
      </div>

      <div className="image">
         <img src={HomeImg} alt="img" />
      </div>

   </div>

</section>
         {/* about section start */}
         <section className="count">

   <div className="box-container">

      <div className="box">
         <i className="fas fa-graduation-cap"></i>
         <div className="content">
            <h3>150+</h3>
            <p>courses</p>
         </div>
      </div>

      <div className="box">
         <i className="fas fa-user-graduate"></i>
         <div className="content">
            <h3>1300+</h3>
            <p>students</p>
         </div>
      </div>

      <div className="box">
         <i className="fas fa-chalkboard-user"></i>
         <div className="content">
            <h3>80+</h3>
            <p>teachers</p>
         </div>
      </div>

      <div className="box">
         <i className="fas fa-face-smile"></i>
         <div className="content">
            <h3>100%</h3>
            <p>satisfaction</p>
         </div>
      </div>

   </div>

</section>
      {/* about section start */}
      <section className="about" id="about">

   <div className="row">

      <div className="image">
         <img src={AboutImg} alt="img" />
      </div>

      <div className="content">
         <h3>why choose us?</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quibusdam magni error, aut enim rerum?</p>
         <a href="#contact" className="btn">contact us</a>
      </div>

   </div>

</section>
      {/* courses section start */}
      <section className="courses" id="courses">

   <h1 className="heading">our <span>courses</span></h1>

   <div className="swiper course-slider">

      <div className="swiper-wrapper">

         <div className="swiper-slide slide">
            <img src={CourseImg1} alt="img" />
            <h3>web development</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!</p>
         </div>

         <div className="swiper-slide slide">
            <img src={CourseImg2} alt="img" />
            <h3>digital marketing</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!</p>
         </div>

         <div className="swiper-slide slide">
            <img src={CourseImg3} alt="img" />
            <h3>science and biology</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!</p>
         </div>

         <div className="swiper-slide slide">
            <img src={CourseImg4} alt="img" />
            <h3>graphic design</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!</p>
         </div>

         <div className="swiper-slide slide">
            <img src={CourseImg5} alt="img" />
            <h3>teaching</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!</p>
         </div>

         <div className="swiper-slide slide">
            <img src={CourseImg6} alt="img" />
            <h3>engineering</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!</p>
         </div>

      </div>

      <div className="swiperPagination"></div>

   </div>

</section>

    </div>
  )
};

export default home;