import React from 'react';
import Navbar from '../../components/Navbar';
// import './homepage.css';

function Homepage() {
  return (
    <>
      <Navbar />
      <div className='w-full bg-hero-pattern h-64.5 bg-center bg-no-repeat	bg-cover'>
        <div className='flex flex-col items-center w-1/2 mx-auto pt-10'>
          <h1 className='flex text-10 font-Sora font-bold	text-center leading-tight mb-8'>
            Your partner in building amazing digital products
          </h1>
          <p className='font-light text-lg mb-8 text-center w-3/4'>
            We are a software development agency leveraging design thinking
            framework to help our clients meet their increasing revenue with
            best users experience.
          </p>
          <button className='bg-variant-color text-white'>Let's Talk</button>
        </div>
      </div>
    </>
  );
}

export default Homepage;
