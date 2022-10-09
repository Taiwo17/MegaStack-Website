import React from 'react';
import NavbarX from './NavbarX';
import XFooter from './XFooter';
import './contactus.css';
function ContactUs() {
  return (
    <>
      <NavbarX />
      <div className='contact-section'>
        <div className='contact-container'>
          <h1 className='contact-title'>
            Become our partner, Let’s talk about your next project
          </h1>
          <p className='contact-content'>
            Drop us a line with the form below or better still shoot us an email
            on hello@megastack.tech
          </p>
        </div>

        <form action=''>
          <div className='form-container'>
            <div>
              <label htmlFor='fullName'>Full Name</label>
              <input
                type='text'
                name='fullName'
                placeholder='Your name'
                id='fullName'
              />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                placeholder='Your email'
                id='email'
              />
            </div>
            <div>
              <label htmlFor='phoneNumber'>Phone Number</label>
              <input
                type='number'
                name='phoneNumber'
                placeholder='Your number'
                id='phoneNumber'
              />
            </div>
            <label htmlFor='message'>Message</label>
            <textarea
              name='message'
              id='message'
              cols='30'
              rows='10'
              placeholder='Tell us briefly about your project'
            ></textarea>
          </div>
          <button className='btn-contact' type='submit'>
            Send Message
          </button>
        </form>
      </div>
      <div className='contact-footer'></div>
      <XFooter />
    </>
  );
}

export default ContactUs;
