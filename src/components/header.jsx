import React from 'react';
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">

   <section className="flex">

      <a href="#home" className="logo">Apollo</a>

      <nav className="navbar">
         <a href="#home">home</a>
         <a href="#about">about</a>
         <a href="#courses">courses</a>
         <a href="#teachers">teachers</a>
         <a href="#reviews">reviews</a>
         <a href="#contact">contact</a>
      </nav>

      <div id="menu-btn" className="fas fa-bars"></div>

   </section>

</header>
  )
};

export default Header;