import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/opinia-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </div>

      {/* Nav Links */}
        <ul className={isOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#admin">Admin</a></li>
          <li><a href="#faculty">Faculty</a></li>
          <li><a href="#student">Student</a></li>
        </ul>
    </nav>
  );
};

export default Navbar;
