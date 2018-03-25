import React from 'react';

import mdText from './Legal.md';
// if (process.env.WEBPACK) require('./Faq.less'); // eslint-disable-line global-require
// import './Faq.less';

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

// const Faq = () => (
//   <div> Faq </div>
// );

export default Legal;
