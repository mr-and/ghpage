import React from "react";
import {Link} from "react-router-dom";
import { useState } from "react";

import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <Link to="/" className="navbarLogo">LOGO</Link>
      <div className="menuIcon" onClick={handleOpen}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}/>
      </div>

      <Link to="/">.goHome( )</Link>
      <Link to="/books">.showBooks( )</Link>
    </div>
  );
}

export default Navbar;