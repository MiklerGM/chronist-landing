import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { distanceInWords } from 'date-fns';
import ruLoc from 'date-fns/locale/ru';
import enLoc from 'date-fns/locale/en';

import { lastUrls, reqRU, reqEN } from '../../articles/blogData';

const getHumanDate = (date, locale) => {
  const lang = (locale === 'ru') ? ruLoc : enLoc;
  const word = (locale === 'ru') ? 'назад' : 'ago';
  return `${distanceInWords(new Date(), date, { locale: lang })} ${word}`;
};

const processArticleGallery = (url, id, locale) => {
  const req = (locale === 'ru') ? reqRU : reqEN;
  return (
    <div key={`article_${id}`} className='xlist--item'>
      <h4> {req(`./${url}.md`).title} </h4>
      <span className='ArticleDate'>
        {getHumanDate(req(`./${url}.md`).date, locale)}
      </span>
      <div
        dangerouslySetInnerHTML={{
          __html: req(`./${url}.md`).__content.slice(0, req(`./${url}.md`).__content.indexOf(' ', 260))
        }}
      />
      <Link to={`/blog/${url}`} className='readmore'>
        <FormattedMessage id='blog.readmore' />
      </Link>
    </div>
  );
};

const ArticleGallery = ({ locale }) => (
  <div className='page--segment bg-gray'>
    <div className='page--content'>
      <div className='container'>
        <h2>
          <FormattedMessage id='home.lastarticles' />
        </h2>
        <div className='xlist'>
          {lastUrls.map((url, id) => processArticleGallery(url, id, locale))}
        </div>
      </div>
    </div>
  </div>
);

ArticleGallery.propTypes = {
  locale: PropTypes.string.isRequired
};

export default ArticleGallery;
