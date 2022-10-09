import React from 'react';
import NavbarX from './NavbarX';
import XFooter from './XFooter';
import './xwork.css';
import './xhomepage.css';

function XWork() {
  const CaseStudy = [
    {
      id: 1,
      imgCase: '/images/mockup.png',
      title: 'Yummy Sport',
      content: 'UI/UX Design, Desktop App',
      view: 'View More',
    },
    {
      id: 2,
      imgCase: '/images/mockup-1.png',
      title: 'Yummy Sport',
      content: 'UI/UX Design, Desktop App',
      view: 'View More',
    },
    {
      id: 3,
      imgCase: '/images/mockup-2.png',
      title: 'Yummy Sport',
      content: 'UI/UX Design, Desktop App',
      view: 'View More',
    },
    {
      id: 4,
      imgCase: '/images/mockup-3.png',
      title: 'Yummy Sport',
      content: 'UI/UX Design, Desktop App',
      view: 'View More',
    },
    {
      id: 5,
      imgCase: '/images/mockup.png',
      title: 'Yummy Sport',
      content: 'UI/UX Design, Desktop App',
      view: 'View More',
    },
    {
      id: 6,
      imgCase: '/images/mockup-1.png',
      title: 'Yummy Sport',
      content: 'UI/UX Design, Desktop App',
      view: 'View More',
    },
    {
      id: 7,
      imgCase: '/images/mockup-2.png',
      title: 'Yummy Sport',
      content: 'UI/UX Design, Desktop App',
      view: 'View More',
    },
    {
      id: 8,
      imgCase: '/images/mockup-3.png',
      title: 'Yummy Sport',
      content: 'UI/UX Design, Desktop App',
      view: 'View More',
    },
  ];
  return (
    <>
      <NavbarX />
      <div className='hero-section'>
        <div className='hero-container'>
          <h1 className='hero-title'>
            Check out some of our partner’s projects
          </h1>
          <p className='hero-content'>
            We have collaborated on a variety of projects across divers
            industries and discipline. Yes, we make complex idea into usable,
            functional digital products and help our partners reach their goals
          </p>
          <button className='hero-btn'>Let's Talk</button>
        </div>
      </div>
      <div className='work-wrapper-container'>
        <div className='main-container'>
          {CaseStudy.map((study) => {
            const { id, imgCase, title, content, view } = study;
            return (
              <div className='big-card-container' key={id}>
                <div className='img-container'>
                  <img src={imgCase} alt='Case Study' />
                </div>
                <h2 className='big-card-title'>{title}</h2>
                <div className='view-container'>
                  <h3 className='big-card-content'>{content}</h3>
                  <button className='btn-view-more'>{view}</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='space-work' style={{ marginBottom: '200px' }}></div>
      <XFooter />
    </>
  );
}

export default XWork;
