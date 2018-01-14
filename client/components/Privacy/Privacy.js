import React from 'react';

import mdText from './Privacy.md';
if (process.env.WEBPACK) require('./Privacy.less'); // eslint-disable-line global-require
// import './Privacy.less';

const Privacy = () => (
  <div id='privacy' className='container'><div className='bg-what'>
    <h1 id='pageTitle' className='text-center'> Правила защиты персональных данных </h1>
    <div
      className='ArticleContent'
      dangerouslySetInnerHTML={{ __html: mdText.__content }}
    />
  </div></div>
);


export default Privacy;
