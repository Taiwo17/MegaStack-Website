import React from 'react';
import { Link } from 'react-router-dom';
import './xcasestudy.css';

function XCaseStudy() {
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
  ];
  return (
    <>
      <div className='main-study-container'>
        <div className='case-study-container'>
          <h2 className='case-study'>Case Study</h2>
          <Link to='/our-work' className='case-btn'>
            View More
          </Link>
        </div>
        <div className='main-container-case'>
          {CaseStudy.map((study) => {
            const { id, imgCase, title, content, view } = study;
            return (
              <div className='case-big-card-container' key={id}>
                <div className='img-container'>
                  <img src={imgCase} alt='Case Study' />
                </div>
                <h2 className='big-card-title'>{title}</h2>
                <div className='view-container'>
                  <h3 className='big-card-content'>{content}</h3>
                  <Link className='btn-view-more'>{view}</Link>
                </div>
              </div>
            );
          })}
        </div>
        <Link className='case-view-more' to='/our-work'>
          View More
        </Link>
      </div>
    </>
  );
}

export default XCaseStudy;
