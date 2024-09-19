import React from 'react';
import Header from '../Header/Header';
import Hero from '../Home/Hero';
import Body from '../Home/BodySection';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div className="home-page">
      <Header />
      <main>
        <Hero />
        <Body />
      </main>
      <Footer />
    </div>
  );
}

export default Home;