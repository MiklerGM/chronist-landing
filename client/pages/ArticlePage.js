import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Moment from 'moment';
import 'moment/locale/ru';

import { reqRU, reqEN } from '../articles/blogData';

const getFormattedDate = (date, locale) => {
  Moment.locale(locale);
  const formattedDT = Moment(date).format('LL');
  return formattedDT;
};

const ArticlePage = ({ data, locale }) => {
  let req = {};
  if (locale === 'ru') {
    req = reqRU;
  } else {
    req = reqEN;
  }

  return (
    <div className='page--segment'><div className='page--content'>
      <Helmet
        meta={[
          { property: 'og:type', content: 'article' },
        ]}
      />
      <h2> {req(`./${data}.md`).title }</h2>
      <div className='dim'>
        <span className='dim'> {req(`./${data}.md`).author} </span>
        <span className='separator'> - </span>
        <span className='dim'> {getFormattedDate(req(`./${data}.md`, locale).date)} </span>
      </div>
      <div className='ArticleContent' dangerouslySetInnerHTML={{ __html: req(`./${data}.md`).__content }} />
    </div></div>
  );
};

ArticlePage.propTypes = {
  data: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired
};

export default ArticlePage;
