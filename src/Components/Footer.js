import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='flex-container footer__links'>
        <Link to={{ pathname: '/' }}>
          <div>Home</div>
        </Link>
        <Link to='/about'>
          <div>About</div>
        </Link>
        <div>Contact</div>
      </div>
    </div>
  );
};
export default Footer;
