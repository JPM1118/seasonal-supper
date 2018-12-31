import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='flex-container flex-container--center footer__links'>
        <Link to={{ pathname: '/' }}>
          <div>Home</div>
        </Link>
        <Link to='/contact'>
          <div>Contact</div>
        </Link>
      </div>
    </div>
  );
};
export default Footer;
