import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const Landing = () => {
  return (
    <div className="landing-page-hero">
      <div className="hero-content">
        <h1>4Life</h1>
        <strong>Find Your Path. Achieve Your Goals.</strong>
        <div>
          <Link to="/home" className="cta-button">Find A Mentor</Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;