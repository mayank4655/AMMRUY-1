import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import CSS file for styling
import logo from '../assets/image 13.png'; // Adjust the path if necessary

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        document.querySelector('.navbar').style.top = "0";
      } else {
        document.querySelector('.navbar').style.top = "-100px"; // Adjust the hiding position
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="navbar-logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li className="navbar-item dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <a href="#services">Services</a>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="#service1">Service 1</a></li>
                <li><a href="#service2">Service 2</a></li>
                <li><a href="#service3">Service 3</a></li>
              </ul>
            )}
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="right-section">
        <ul className="auth-links">
          <li><a href="#login">Login</a></li>
          <li><a href="#signup">Signup</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;




