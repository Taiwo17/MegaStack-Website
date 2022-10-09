import React from 'react';
import NavbarX from './NavbarX';
import './xhomepage.css';
import XOurServices from './XOurServices';
import XFooter from './XFooter';

function About() {
  return (
    <>
      <NavbarX />
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
      </div>
      <XOurServices />
      <div className='space-footer' style={{ marginBottom: '500px' }}></div>
      <XFooter />
    </>
  );
}

export default About;
