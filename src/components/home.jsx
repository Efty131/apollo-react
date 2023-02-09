import React, { useEffect } from 'react';

import Swiper from 'swiper';

import Header from './header';
import HomeImg from '../images/home-img.svg';
import AboutImg from '../images/about-img.svg';
import Courses from '../components/courses';
import Footer from '../components/footer';
import Pic1 from '../images/pic-1.png';
import Pic2 from '../images/pic-2.png';
import Pic3 from '../images/pic-3.png';
import Pic4 from '../images/pic-4.png';
import Pic5 from '../images/pic-5.png';
import Pic6 from '../images/pic-6.png';

const Home = () => {

   useEffect(() => {
      new Swiper('.reviews-slider', {
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
      {/* <Courses /> */}
      {/* Review section start */}
      {/* <section className="reviews" id="reviews">

   <h1 className="heading"> student's <span>reviews</span></h1>

   <div className="swiper reviews-slider">

      <div className="swiper-wrapper">

         <div className="swiper-slide slide">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus atque fuga delectus numquam consequatur velit autem distinctio possimus culpa!</p>
            <div className="user">
               <img src={Pic1} alt="img" />
               <div className="user-info">
                  <h3>john deo</h3>
                  <div className="stars">
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star-half-alt"></i>
                  </div>
               </div>
            </div>
         </div>

         <div className="swiper-slide slide">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus atque fuga delectus numquam consequatur velit autem distinctio possimus culpa!</p>
            <div className="user">
               <img src={Pic2} alt="img" />
               <div className="user-info">
                  <h3>john deo</h3>
                  <div className="stars">
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star-half-alt"></i>
                  </div>
               </div>
            </div>
         </div>

         <div className="swiper-slide slide">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus atque fuga delectus numquam consequatur velit autem distinctio possimus culpa!</p>
            <div className="user">
               <img src={Pic3} alt="img" />
               <div className="user-info">
                  <h3>john deo</h3>
                  <div className="stars">
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star-half-alt"></i>
                  </div>
               </div>
            </div>
         </div>

         <div className="swiper-slide slide">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus atque fuga delectus numquam consequatur velit autem distinctio possimus culpa!</p>
            <div className="user">
               <img src={Pic4} alt="img" />
               <div className="user-info">
                  <h3>john deo</h3>
                  <div className="stars">
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star-half-alt"></i>
                  </div>
               </div>
            </div>
         </div>

         <div className="swiper-slide slide">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus atque fuga delectus numquam consequatur velit autem distinctio possimus culpa!</p>
            <div className="user">
               <img src={Pic5} alt="img" />
               <div className="user-info">
                  <h3>john deo</h3>
                  <div className="stars">
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star-half-alt"></i>
                  </div>
               </div>
            </div>
         </div>

         <div className="swiper-slide slide">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus atque fuga delectus numquam consequatur velit autem distinctio possimus culpa!</p>
            <div className="user">
               <img src={Pic6} alt="img" />
               <div className="user-info">
                  <h3>john deo</h3>
                  <div className="stars">
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star-half-alt"></i>
                  </div>
               </div>
            </div>
         </div>

      </div>

      <div className="swiperPagination"></div>

   </div>

</section> */}
      <Footer />
    </div>
  )
};

export default Home;