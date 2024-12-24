import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="logo-text">FECIN</h1>
        <ul className="flex space-x-6 navbar-text">
        <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about-fecin" className="hover:underline">About</a></li>
          <li><a href="/leadership" className="hover:underline">Leadership</a></li>
          <li><a href="/events" className="hover:underline">Events</a></li>
          <li><a href="/prayer-request" className="hover:underline">Prayer Requests</a></li>
          <li><a href="/donate" className="hover:underline">Donate</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
  