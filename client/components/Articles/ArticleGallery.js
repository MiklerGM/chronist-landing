import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Moment from 'moment';
import 'moment/locale/ru';

import { lastUrls, reqRU, reqEN } from '../../articles/blogData';

const getHumanDate = (date, locale) => {
  Moment.locale(locale);
  const humanDT = Moment(date).endOf('day').fromNow();
  return humanDT;
};

const processArticleGallery = (url, id, locale) => {
  let req = {};
  if (locale === 'ru') {
    req = reqRU;
  } else {
    req = reqEN;
  }
  return (
    <div key={`article_${id}`} className='xlist--item'>
      <h4> {req(`./${url}.md`).title} </h4>
      <span className='ArticleDate'> {getHumanDate(req(`./${url}.md`).date, locale)} </span>
      <div dangerouslySetInnerHTML={{ __html: req(`./${url}.md`).__content.slice(0, req(`./${url}.md`).__content.indexOf(' ', 260)) }} />
      <Link to={`/blog/${url}`} className='readmore'>
        <FormattedMessage
          id='blog.readmore'
        />
      </Link>
    </div>
  );
};

const ArticleGallery = ({ locale }) => (
  <div className='page--segment bg-gray'>
    <div className='page--content'>
      <div className='container'>
        <h2>
          <FormattedMessage
            id='home.lastarticles'
          />
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
