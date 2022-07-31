import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <Link to="/" className="navbarLogo">
        Main.class
      </Link>
      <div className="menuIcon" onClick={handleOpen}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <div className="navLinks">
        <ul className={isOpen ? "navMenu active" : "navMenu"}>
          <li className="navItem">
            <Link to="/" onClick={handleClose}>
              .goHome( )
            </Link>
          </li>
          <li className="navItem">
            <Link to="/skills" onClick={handleClose}>
              .showSkills( )
            </Link>
          </li>
          <li className="navItem">
            <Link to="/cv" onClick={handleClose}>
              .showCV( )
            </Link>
          </li>
          <li className="navItem">
            <Link to="/books" onClick={handleClose}>
              .showBooks( )
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
