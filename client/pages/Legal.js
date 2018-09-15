import React from 'react';

import mdText from '../articles/Legal.md';

const Legal = () => (
  <div id='faq' className='page--segment'><div className='page--content'>
    <h1 id='pageTitle' className='text-center'>
      Соглашение об использовании материалов и сервисов интернет-сайта
      <br />
      <small>(пользовательское соглашение)</small>
    </h1>
    <div
      className='ArticleContent'
      dangerouslySetInnerHTML={{ __html: mdText.__content }}
    />
  </div></div>
);

export default Legal;
