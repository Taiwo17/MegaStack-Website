import React from 'react';
import SectionContainer from './SectionContainer';
import './xhomepage.css';

function HeroSection({ Heros }) {
  return (
    <>
      <div className='hero-section'>
        <div className='hero-container'>
          <h1 className='hero-title'>
            Your partner in building amazing digital products
          </h1>
          <p className='hero-content'>
            We are a software development agency leveraging design thinking
            framework to help our clients meet their increasing revenue with
            best users experience.
          </p>
          <button className='hero-btn'>Let's Talk</button>
        </div>
        <div className='hero-space'></div>
        <SectionContainer Heros={Heros} />
      </div>
    </>
  );
}

export default HeroSection;
