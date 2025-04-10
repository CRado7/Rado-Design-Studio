import React from 'react';
import { Link } from 'react-router-dom';
import Wordmark from '../assets/Wordmark.svg';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={Wordmark} alt="Rado Design Studio" />
      </div>

      <div className="footer-content">
        <div className="contact-info">
            <a href="mailto:christopher.ferraro34@gmail.com">christopher.ferraro34@gmail.com</a>
            <a href="tel:7743923956">774.392.3956</a>
        </div>
        <div className="site-links">
          <div className="our-site">
            <h4>Our Site</h4>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/our-work">Our Work</Link>
              <Link to="/services">Services</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </ul>
          </div>
          <div className="footer-services">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services/web-design">Web Design + Development</Link></li>
              <li><Link to="/services/branding">Brand Development</Link></li>
              <li><Link to="/services/marketing">Printing Services</Link></li>
              <li><Link to="/services/consulting">Custom Art Creation</Link></li>
            </ul>
          </div>
          <div className="social-media">
            <h4>Social Media</h4>
            <ul>
              <li><a href="https://www.instagram.com/rado.design.studio/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/rado-design-studio/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>

      <p>&copy; 2025 Rado Design Studio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
