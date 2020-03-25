import React from 'react';
import image from './majortom.svg';

const GatewayTimeout = () => (
  <div className='errorPage' id='GatewayTimeout'>
    <h3 className='text-center'>504... Gateway Timeout</h3>
    <div className='background'>
      <img src={image} />
    </div>
  </div>
);

export default GatewayTimeout;
