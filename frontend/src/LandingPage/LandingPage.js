import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/4Life_logo.jpeg';
import './LandingPage.css';

const Landing = () => {
  return (
    <div className="landing-page-hero">
      <div className="hero-content">
        <img src={logo} alt="4Life Logo" className="logo"/>
        <strong>Find Your Path. Achieve Your Goals.</strong>
        <div>
          <Link to="/home" className="cta-button">Find A Mentor</Link>
        </div>
      </div>
    </div>
  );
};
export default Landing;