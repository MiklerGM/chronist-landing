import React from 'react';
import image from './majortom.svg';

const BadGateway = () => (
  <div className='errorPage' id='BadGateway'>
      <h3 className='text-center'>502... Bad Gateway</h3>
    <div className='background'>
      <img src={image} />
    </div>
  </div>
);

export default BadGateway;
