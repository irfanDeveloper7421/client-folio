import { useState } from "react";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header data-aos="fade-down" data-aos-duration="800">
      <nav>
        <div className="logo" data-aos="fade-right" data-aos-delay="200">
          M. Irfan
        </div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`} data-aos="fade-left" data-aos-delay="400">
          <li><a href="#home" data-aos="zoom-in" data-aos-delay="500">Home</a></li>
          <li><a href="#about" data-aos="zoom-in" data-aos-delay="600">About</a></li>
          <li><a href="#skills" data-aos="zoom-in" data-aos-delay="700">Skills</a></li>
          <li><a href="#projects" data-aos="zoom-in" data-aos-delay="800">Projects</a></li>
          <li><a href="#contact" data-aos="zoom-in" data-aos-delay="900">Contact</a></li>
        </ul>

        <div className="hamburger" onClick={toggleNav} data-aos="zoom-in" data-aos-delay="1000">
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
