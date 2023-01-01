import React from 'react';
import Header from './header';

const about = () => {
  return (
    <div>
      <Header />
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
      </div>
  )
};

export default about;