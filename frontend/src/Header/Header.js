// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">4Life Mentorship</div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;