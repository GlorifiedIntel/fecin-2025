import React from "react";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo-text">FECIN</h1>
        <div className="nav-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/leadership">Leadership</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/prayer-requests">Prayer Requests</a></li>
            <li><a href="/donate">Donate</a></li>
            <li><a href="/login" className="login-button">Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
