import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import mdTextRU from '../articles/FaqRU.md';
import mdTextEN from '../articles/FaqEN.md';

const Faq = ({ locale }) => {
  const mdText = (locale === 'ru') ? mdTextRU : mdTextEN;
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

Faq.propTypes = {
  locale: PropTypes.string.isRequired
};

export default Faq;
