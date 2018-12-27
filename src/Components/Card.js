import React from 'react';
import { withRouter } from 'react-router-dom';

function importImages(dir) {
  let images = {};
  dir.keys().map(image => {
    return (images[image.replace('./', '')] = dir(image));
  });
  return images;
}
const images = importImages(require.context('./../img', false, /\.(jpg)$/));

const Card = (props) => {

  const handleChange = () => {
    props.history.push(`${props.produce}`);
  }

  return (
    <div className='card'>
      <div className='card__pic'>
        <img src={images[`${props.produce}.jpg`]} alt='Produce pic' />
      </div>
      <div className='card__description'>
        <h2 className='card__description__title'>{props.produce}</h2>
      </div>
      <div className='card__btn'>
        <button className='btn' onClick={() => handleChange()}>
          Recipies
          </button>
      </div>
    </div>
  );
}


export default withRouter(Card);
