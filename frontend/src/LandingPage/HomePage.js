import React from 'react';
import Header from '../Header/Header';
import Hero from '../BodySection/HeroSection/Hero';
import Features from '../BodySection/Features/Features';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div className="home-page">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default Home;