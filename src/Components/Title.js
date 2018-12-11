import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  return (
    <div className='title-block'>
      <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
        <h1 className='title-block--title' onClick={props.clearState}>
          SEASONAL SUPPER
        </h1>
      </Link>
      <h2 className='title-block--subtitle'>Recipes for seasonal eating.</h2>
    </div>
  );
};
