import React from 'react';
import './ErrorPages.less';
import image from './majortom.png';

const NotFound = () => (
  <div className='errorPage' id='NotFound'>
      <h3 className='text-center'>404.. Страница не найдена</h3>
    <div className='background'>
      <img src={image} />
    </div>
  </div>
);

export default NotFound;
