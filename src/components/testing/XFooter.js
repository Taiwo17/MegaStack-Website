import React from 'react';
import { Link } from 'react-router-dom';
import './xfooter.css';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-wrapper'>
        <div className='container-footer-text'>
          <div className='get-in-touch'>
            <h2 className='touch-text'>Get in touch</h2>
          </div>
          <div className='footer-descriptions'>
            <div className='link-btn'>
              <Link href='/' className='btn-touch'>
                Let's Talk
              </Link>
            </div>
            <div className='footer-content-wrapper'>
              <p className='footer-content '>
                Reach out to find out how we can be of help to you. Hit the
                button below to send us an email at hello@megastack.tech
              </p>
              <p className='footer-content space-footer-text '>
                You can also check out some of our previous project we’ve helped
                our partners ship to their users. Click here to see our works.
              </p>
            </div>
          </div>
        </div>
        <div className='hr'></div>
        <div className='social-main'>
          <div className='social-handle-wrapper'>
            <div className='social-handle'>
              <img src='/images/Negative.png' alt='' />
              <p className='social-footer-text'>Megastack</p>
            </div>
            <div className='social-handle'>
              <img src='/images/Negative (1).png' alt='' />
              <p className='social-footer-text'>Megastack</p>
            </div>
            <div className='social-handle'>
              <img src='/images/Negative (2).png' alt='' />
              <p className='social-footer-text'>Megastack</p>
            </div>
            <div className='social-handle'>
              <img src='/images/Negative (3).png' alt='' />
              <p className='social-footer-text'>Megastack</p>
            </div>
          </div>
          <div className='copy-right-container'>
            <p className='copy-right'>
              ©Copyright 2022, Megastack Technologies Limited
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
