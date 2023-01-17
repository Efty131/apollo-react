import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const menuBtnRef = useRef(null);
  const navbarRef = useRef(null);
  useEffect(() => {
    const menuBtn = menuBtnRef.current;
    const navbar = navbarRef.current;

    menuBtn.onclick = () => {
      menuBtn.classList.toggle('fa-times');
      navbar.classList.toggle('active');
    };

    window.onscroll = () => {
      menuBtn.classList.remove('fa-times');
      navbar.classList.remove('active');
    };
  }, []);

  return (
    <header className="header">

      <section className="flex">

        <a href="#home" className="logo">Apollo</a>

        <nav className="navbar" ref={navbarRef}>
          <Link to={"/"}>Home</Link>
          <Link to={"/notes"}>Notes</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/courses"}>Courses</Link>
          <Link to={"/teachers"}>Teachers</Link>
          <Link to={"/reviews"}>Reviews</Link>
          <Link to={"/contact"}>Contact</Link>
        </nav>

        <div id="menu-btn" className="fas fa-bars" ref={menuBtnRef}></div>

      </section>

    </header>
  )
};

export default Header;