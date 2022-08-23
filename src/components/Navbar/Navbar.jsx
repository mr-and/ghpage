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
      <Link to="/" className="navbar__logo">
        Main.class
      </Link>
      <div className="menu-icon" onClick={handleOpen}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <div className="navbar__links">
        <ul className={isOpen ? "navbar__links__menu active" : "navbar__links__menu"}>
          <li className="navbar__links__item">
            <Link to="/" onClick={handleClose}>
              .goHome( )
            </Link>
          </li>
          <li className="navbar__links__item">
            <Link to="/skills" onClick={handleClose}>
              .showSkills( )
            </Link>
          </li>
          <li className="navbar__links__item">
            <Link to="/cv" onClick={handleClose}>
              .showCV( )
            </Link>
          </li>
          <li className="navbar__links__item">
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
