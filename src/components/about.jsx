import React from 'react';

import Header from './header';
import Footer from './footer';
import AboutImg from '../images/about-img.svg';

const about = () => {
   return (
      <div>
         <Header /> <br></br> <br></br> <br></br> <br></br> <br></br>
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
         <Footer />
      </div>
   )
};

export default about;