import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ArtBlog</h3>
            <p>Share your thoughts and ideas with the world.</p>
          </div>
          <div className="footer-section">
            <h3>Contacts</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> 75 Park Avenue, New York, NY 10016
            </p>
            <p>
              <i className="fas fa-envelope"></i> artblog@example.com
            </p>
            <p>
              <i className="fas fa-phone"></i> +1 (212) 555-7890
            </p>
          </div>
          <div className="footer-section">
            <h3>Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/articles">Articles</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Social Media</h3>
            <div className="social-icons">
              <a href="#!" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#!" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#!" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#!" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} ArtBlog. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 