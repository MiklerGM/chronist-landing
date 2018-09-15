import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { format } from 'date-fns';
import ruLoc from 'date-fns/locale/ru';
import enLoc from 'date-fns/locale/en';

import { urls, reqRU, reqEN } from '../articles/blogData';

const getFormattedDate = (date, locale) => {
  const lang = (locale === 'ru') ? ruLoc : enLoc;
  return format(date, 'D MMMM YYYY', { locale: lang });
};

const processArticle = (url, id, locale) => {
  const req = (locale === 'ru') ? reqRU : reqEN;
  return (
    <div key={`article_${id}`} className='container'>
      <h2> {req(`./${url}.md`).title} </h2>
      <div className='dim'>
        <span className='dim'> {req(`./${url}.md`).author} </span>
        <span className='separator'> - </span>
        <span className='dim'> {getFormattedDate(req(`./${url}.md`).date, locale)} </span>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: req(`./${url}.md`)
            .__content
            .slice(0, req(`./${url}.md`).__content.indexOf(' ', 400))
        }}
      />
      <Link to={`/blog/${url}`} className='pull-right readmore'>
        <FormattedMessage id='blog.readmore' />
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
    <div className='page--content'>
      <div className='article--item'>
        {urls.map((url, id) => processArticle(url, id, locale))}
      </div>
    </div>
  </div>
);

Blog.propTypes = {
  locale: PropTypes.string.isRequired
};

export default Blog;
