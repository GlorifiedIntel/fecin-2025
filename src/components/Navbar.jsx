import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="logo-text">FECIN</h1>
        <ul className="navbar-list">
          <li><a href="/">Home</a></li>

          {/* About Dropdown */}
          <li className="dropdown">
            <a href="#" className="dropdown-link">About</a>
            <ul className="dropdown-menu">
              <li><a href="/what-we-do">What We Do</a></li>
              <li><a href="/where-we-serve">Where We Serve</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </li>

          <li><a href="/leadership">Leadership</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/prayer-request">Prayer Requests</a></li>
          <li><a href="/donate">Donate</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
