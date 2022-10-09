import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import './navbarx.css';

function NavbarX() {
  const [navBarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => setNavbarOpen(!navBarOpen);
  const closeMenu = () => setNavbarOpen(false);

  const hamburgerStyle = {
    width: '1.875rem',
    height: '1.875rem',
    color: '#000',
    borderRadius: '.3125rem',
    padding: '.3125rem',
  };

  return (
    <nav className='nav-bar'>
      <div>
        <Link to='/'>
          <img src='/images/Logo-9 1.png' alt='Logo' className='nav-logo' />
        </Link>
      </div>
      <div
        className={`${navBarOpen ? 'showMenu' : 'menuNav'}`}
        onClick={() => closeMenu()}
      >
        <Link className='nav-link' to='/'>
          Home
        </Link>
        <Link className='nav-link' to='/about-us'>
          About Us
        </Link>
        <Link className='nav-link' to='/our-work'>
          Our Work
        </Link>
        <Link className='nav-link' to='/blog'>
          Blog
        </Link>
        <Link className='nav-link' to='/contact-us'>
          Let's Talk
        </Link>
      </div>
      <button onClick={handleToggle} className='btn-hamburger'>
        {navBarOpen ? (
          <MdClose style={hamburgerStyle} />
        ) : (
          <FiMenu style={hamburgerStyle} />
        )}
      </button>
    </nav>
  );
}

export default NavbarX;
