import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              Welcome to <span>ArtBlog</span>
            </h1>
            <p>
              Share your thoughts, ideas, and creativity with the world on our
              modern blogging platform.
            </p>
            <div className="hero-buttons">
              <Link to="/articles" className="btn btn-primary">
                Read Articles
              </Link>
              <Link to="/register" className="btn btn-light">
                Start Writing
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/hero.png" alt="Blog illustration" />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">
            Why ArtBlog?
          </h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-feather-alt"></i>
              </div>
              <h3>Easy Creation</h3>
              <p>
                Intuitive interface for creating and publishing your content.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-palette"></i>
              </div>
              <h3>Beautiful Design</h3>
              <p>
                Modern and responsive design for any device.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Security</h3>
              <p>
                Your data is protected by modern security technologies.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-share-alt"></i>
              </div>
              <h3>Social Features</h3>
              <p>
                Share your articles on social media and attract readers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>
              Ready to share your ideas?
            </h2>
            <p>
              Join our community of authors and readers today!
            </p>
            <Link to="/register" className="btn btn-secondary">
              Start Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 