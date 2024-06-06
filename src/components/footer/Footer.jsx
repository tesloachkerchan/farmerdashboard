// src/Footer.js
import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo2 from '../.././assets/logo2.png'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo2} alt="Agriconnect Logo" />
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <a href="/about">About Us</a>
            <p>Learn more about our mission to connect agriculture professionals worldwide.</p>
          </div>
          <div className="footer-section">
            <a href="/services">Services</a>
            <p>Discover the range of services we offer to support your agricultural needs.</p>
          </div>
          <div className="footer-section">
            <a href="/contact">Contact Us</a>
            <p>Get in touch with us for any inquiries or support requests.</p>
          </div>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>&copy; 2024 Agriconnect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
