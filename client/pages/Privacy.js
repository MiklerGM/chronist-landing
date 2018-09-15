import React from 'react';

import mdText from '../articles/Privacy.md';

const Privacy = () => (
  <div id='privacy' className='page--segment'>
    <div className='page--content'>
      <h1 id='pageTitle' className='text-center'> Правила защиты персональных данных </h1>
      <div
        className='ArticleContent'
        dangerouslySetInnerHTML={{ __html: mdText.__content }}
      />
    </div>
  </div>
);

export default Privacy;
