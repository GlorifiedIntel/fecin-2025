import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Footer = () => (
    <footer className="footer">
       <div style={iconContainerStyle}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={iconStyle}><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={iconStyle}><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={iconStyle}><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Fellowship of Eggon Christians in Nigeria. All rights reserved.</p>
        <p>Designed and Developed by <a class="author" href="https://www.linkedin.com/in/kevin-cross-minchakpu-7897379a" target="_blank">Kevin Cross Minchakpu</a>. Abuja, Nigeria</p>
      </div>
    </footer>
  );

  // Example inline styles
const footerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "20px 0",
};

const iconContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  marginBottom: "10px",
};

const iconStyle = {
  color: "#fff",
  fontSize: "24px",
  textDecoration: "none",
};

  export default Footer;
  