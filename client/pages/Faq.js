import React from 'react';
import { FormattedMessage } from 'react-intl';

import mdTextRU from '../articles/FaqRU.md';
import mdTextEN from '../articles/FaqEN.md';

const Faq = ({ locale }) => {
  let mdText = {};
  if (locale === 'ru') {
    mdText = mdTextRU;
  } else {
    mdText = mdTextEN;
  }
  return (
    <div id='faq' className='page--segment'><div className='page--content'>
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
  );
};

export default Faq;
