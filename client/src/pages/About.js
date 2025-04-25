import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-container fadeIn">
      <div className="container">
        <div className="about-header">
          <h1>About Us</h1>
          <div className="about-subtitle">
            <p>Learn more about the ArtBlog platform</p>
          </div>
        </div>

        <div className="about-section">
          <div className="about-image">
            <img src="/about.png" alt="About Us" />
          </div>
          <div className="about-content">
            <h2>Our Mission</h2>
            <p>
              ArtBlog is a modern platform for creating and sharing content, designed for 
              authors, artists, thinkers, and creative individuals.
            </p>
            <p>
              We aim to create a space where everyone can share their thoughts, 
              ideas, and creativity with the world through an intuitive and beautiful interface.
            </p>
          </div>
        </div>

        <div className="about-values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Creativity</h3>
              <p>
                We believe in the power of creative self-expression and provide tools for its realization.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Community</h3>
              <p>
                We build a friendly community where authors can connect and inspire each other.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Trust</h3>
              <p>
                We ensure the security of your data and respect your privacy.
              </p>
            </div>
          </div>
        </div>

        <div className="about-team">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="/team1.png" alt="Team Member" />
              </div>
              <h3>Alex Johnson</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/team2.png" alt="Team Member" />
              </div>
              <h3>Maria Smith</h3>
              <p>Lead Designer</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/team3.png" alt="Team Member" />
              </div>
              <h3>Daniel West</h3>
              <p>CTO</p>
            </div>
          </div>
        </div>

        <div id="contact" className="about-contact">
          <h2>{t('Contact Us')}</h2>
          <p>
            {t('If you have any questions or suggestions, feel free to contact us in any convenient way')}
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>{t('Email')}</p>
              <p>artblog@example.com</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone-alt"></i>
              <p>{t('Phone')}</p>
              <p>+1 (212) 555-7890</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>{t('Address')}</p>
              <p>75 Park Avenue, Suite 1200</p>
              <p>New York, NY 10016</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 