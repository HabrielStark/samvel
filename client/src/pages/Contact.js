import React from 'react';
import ContactForm from '../components/layout/ContactForm';

const Contact = () => {
  return (
    <div className="container fadeIn">
      <div className="page-header">
        <h1>
          <i className="fas fa-envelope"></i> Contact Us
        </h1>
        <p>
          Have questions, suggestions, or just want to say hello? We'd love to hear from you!
        </p>
      </div>

      <div className="contact-page-content">
        <div className="contact-info-section">
          <h2>Our Contact Information</h2>
          <div className="contact-info-cards">
            <div className="contact-card">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Our Location</h3>
              <p>75 Park Avenue, Suite 1200</p>
              <p>New York, NY 10016</p>
              <a href="https://maps.google.com/?q=75+Park+Avenue+New+York+NY+10016" className="contact-link" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-directions"></i> Get Directions
              </a>
            </div>
            <div className="contact-card">
              <i className="fas fa-phone-alt"></i>
              <h3>Phone</h3>
              <p>+1 (212) 555-7890</p>
              <p>Mon-Fri 9:00 - 17:00 EST</p>
              <a href="tel:+12125557890" className="contact-link">
                <i className="fas fa-phone"></i> Call Us
              </a>
            </div>
            <div className="contact-card">
              <i className="fas fa-envelope"></i>
              <h3>Email</h3>
              <p>artblog@example.com</p>
              <p>info@artblog.com</p>
              <a href="mailto:artblog@example.com" className="contact-link">
                <i className="fas fa-envelope"></i> Email Us
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          <p className="form-intro">We typically respond within 24 hours on business days.</p>
          <ContactForm />
        </div>

        <div className="follow-us-section">
          <h2>Follow Us</h2>
          <p>Stay connected with us on social media for updates and more!</p>
          <div className="social-buttons">
            <a href="#!" className="social-button" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
              <span>Facebook</span>
            </a>
            <a href="#!" className="social-button" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
              <span>Twitter</span>
            </a>
            <a href="#!" className="social-button" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
            <a href="#!" className="social-button" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 