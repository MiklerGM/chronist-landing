import React from 'react';
import { FormattedMessage } from 'react-intl';

import mdTextRU from './FaqRU.md';
import mdTextEN from './FaqEN.md';
if (process.env.WEBPACK) require('./Faq.less'); // eslint-disable-line global-require
// import './Faq.less';

const Faq = ({ locale }) => {
  let mdText = {}
  if (locale === 'ru') {
    mdText = mdTextRU;
  } else {
    mdText = mdTextEN;
  }
  return(
    <div id='faq' className='container'><div className='bg-what'>
      <h1 id='pageTitle' className='text-center'>
        <FormattedMessage
          id='faq.title'
        />
      </h1>
      <div
        className='ArticleContent'
        dangerouslySetInnerHTML={{ __html: mdText.__content }}
      />
    </div></div>
  )
};

// const Faq = () => (
//   <div> Faq </div>
// );

export default Faq;
