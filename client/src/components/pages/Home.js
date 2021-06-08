import React from 'react';
import '../../App.css';
import Cards from '../HomePage/Cards';
import Footer from '../HomePage/Footer';
import HeroSection from '../HomePage/HeroSection';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
