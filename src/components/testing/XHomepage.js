import React from 'react';
import NavbarX from './NavbarX';
import XOurServices from './XOurServices';
import XCaseStudy from './XCaseStudy';
import Footer from './XFooter';
import HeroSection from './HeroSection';

function XHomepage() {
  const Heros = [
    {
      id: 1,
      title: 'We Plan',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              nullam erat quam tellus feugiat risus semper. Amet orci facilisi
              nec`,
    },
    {
      id: 2,
      title: 'We Design',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              nullam erat quam tellus feugiat risus semper. Amet orci facilisi
              nec`,
    },
    {
      id: 3,
      title: 'We Develop',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              nullam erat quam tellus feugiat risus semper. Amet orci facilisi
              nec`,
    },
  ];
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
      imgCase: '/images/mockup.png',
      title: 'Yummy Sport',
      content: 'UI/UX Design, Desktop App',
      view: 'View More',
    },
    {
      id: 3,
      imgCase: '/images/mockup.png',
      title: 'Yummy Sport',
      content: 'UI/UX Design, Desktop App',
      view: 'View More',
    },
    {
      id: 4,
      imgCase: '/images/mockup.png',
      title: 'Yummy Sport',
      content: 'UI/UX Design, Desktop App',
      view: 'View More',
    },
  ];
  return (
    <>
      <NavbarX />
      <HeroSection Heros={Heros} />
      <XOurServices />
      <XCaseStudy CaseStudy={CaseStudy} />
      <Footer />
    </>
  );
}

export default XHomepage;
