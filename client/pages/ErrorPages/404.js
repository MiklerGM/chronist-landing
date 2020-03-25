import React from 'react';
import image from './majortom.svg';

const NotFound = () => (
  <div className='errorPage' id='NotFound'>
    <h3 className='text-center'>404... Страница не найдена</h3>
    <div className='background'>
      <img alt="404" src={image} />
    </div>
  </div>
);

export default NotFound;
