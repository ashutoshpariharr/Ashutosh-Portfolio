import React, { useState } from "react";
import { Link } from "react-scroll";
import { useTypewriter } from "react-simple-typewriter";
import { FaBars, FaTimes } from "react-icons/fa";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Front-end developer",
      "React.js developer",
      "HTML, CSS, JavaScript, etc.",
      "Communications skills, Problem Solving etc.",
    ],
    loop: 0,
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  //====== this for responsivenesss hemburger menu  =======

  const [isOpen, setIsOpen] = useState(false);

  const clickMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="Home" className="container">
      <div className="header">
        <div className={`navbar-container ${isOpen ? "chaloo" : ""}`}>
          <nav className="navbar">
            <img id="navLogo" src="imgs/R.png" alt="logoImage" />

            {/* Edit navbar click functionality */}
            <div
              className={`menu-toggle ${menuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            ></div>

            {/* This is for hemburger icon */}

            <div className="menu-icon" onClick={clickMenu}>
              {isOpen ? <FaBars /> : <FaTimes />}
            </div>

            <ul className="nav-menu">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="Service"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="Footer"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Footer
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="left-text">
          <h2>UI/UX Designer</h2>
          <br />
          <h1>
            Hi, I'm <span>Ashutosh</span>
          </h1>
          <br />
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
