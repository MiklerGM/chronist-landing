import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Moment from 'moment';
import 'moment/locale/ru';
// import NotFound from '../../pages/NotFound';

// if (process.env.WEBPACK) require('./Articles.less'); // eslint-disable-line global-require

import { urls, reqRU, reqEN } from '../articles/blogData';

const getFormattedDate = (date, locale) => {
  Moment.locale(locale);
  const formattedDT = Moment(date).format('LL');
  return formattedDT;
};


const processArticle = (url, id, locale) => {
  let req = {};
  if (locale === 'ru') {
    req = reqRU;
  } else {
    req = reqEN;
  }
  return (
    <div key={`article_${id}`} className='container'>
      <h2> {req(`./${url}.md`).title} </h2>
      <div className='dim'>
        <span className='dim'> {req(`./${url}.md`).author} </span>
        <span className='separator'> - </span>
        <span className='dim'> {getFormattedDate(req(`./${url}.md`).date, locale)} </span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: req(`./${url}.md`).__content.slice(0, req(`./${url}.md`).__content.indexOf(' ', 400)) }} />
      <Link to={`/blog/${url}`} className='pull-right readmore'>
        <FormattedMessage
          id='blog.readmore'
        />
      </Link>
      <hr />
    </div>
  );
};


const Blog = ({ locale }) => (
  <div className='page--segment'>
    <Helmet
      title='Блог'
      meta={[
        { name: 'description', content: 'Хронист Блог' },
        { property: 'og:type', content: 'article_' },
        { property: 'og:title', content: 'Блог' }
      ]}
    />
    <h1 id='pageTitle'>
      <FormattedMessage
        id='blog.title'
      />
    </h1>
    <div><div className='page--content'>
      <div className='article--item'>
        {urls.map((url, id) => processArticle(url, id, locale))}
      </div>
    </div></div>
  </div>
);


Blog.propTypes = {
  locale: PropTypes.string.isRequired
};

export default Blog;
