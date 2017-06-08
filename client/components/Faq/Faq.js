import React from 'react';

import mdText from './Faq.md';
if (process.env.WEBPACK) require('./Faq.less'); // eslint-disable-line global-require
// import './Faq.less';

const Faq = () => (
  <div id='faq' className='container'><div className='bg-what'>
    <h1 id='pageTitle' className='text-center'> Часто задаваемые вопросы </h1>
    <div
      className='ArticleContent'
      dangerouslySetInnerHTML={{ __html: mdText.__content }}
    />;
  </div></div>
);

// const Faq = () => (
//   <div> Faq </div>
// );

export default Faq;
