import React from 'react'
import NoiseBackground from '../NoiseBackground'
import Header from '../Header';
import Hero from '../Hero';

export default function Home() {
  return (
    <div className='home-container'>
      <NoiseBackground />
      <Header />
      <Hero />
    </div>
  );
}
