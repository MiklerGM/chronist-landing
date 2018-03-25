import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Moment from 'moment';
import 'moment/locale/ru';
import NotFound from '../NotFound';
import { Helmet } from 'react-helmet';

if (process.env.WEBPACK) require('./blog.less'); // eslint-disable-line global-require

const reqRU = require.context('./postsRU', false, /\.md$/);
const reqEN = require.context('./postsEN', false, /\.md$/);

const urls = [];
reqRU.keys().forEach((fileName, id) => {
  urls[id] = fileName.replace('./', '').replace('.md', '');
});

const getHumanDate = (date, locale) => {
  Moment.locale(locale);
  // const formattedDT = Moment(date).calendar();
  const humanDT = Moment(date).endOf('day').fromNow();
  return humanDT;
};


const getFormattedDate = (date, locale) => {
  Moment.locale(locale);
  // const formattedDT = Moment(date).calendar();
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
      <Link to={`/blog/${url}`}><button className='pull-right readmore'>
        <FormattedMessage
          id='blog.readmore'
        />
      </button> </Link>
      <hr />
    </div>
  );
};

const BlogWrapper = ({ locale }) => (
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
        {urls.reverse().map((url, id) => processArticle(url, id, locale))}
      </div>
    </div></div>
  </div>
);


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
      <Link to={`/blog/${url}`}><button className='readmore'>
        <FormattedMessage
          id='blog.readmore'
        />
      </button></Link>
    </div>
  );
};

export const ArticleGallery = ({ locale }) => {
  return (
    <div className='page--segment bg-gray'>
      <div className='page--content'>
        <div className='container'>
          <h2>
            <FormattedMessage
              id='home.lastarticles'
            />
          </h2>
          <div className='xlist'>
            {urls.slice(-3).reverse().map((url, id) => processArticleGallery(url, id, locale))}
          </div>
        </div>
      </div>
    </div>
  );
};


const Blog = ({ locale }) => (
  <Switch>
    <Route exact path='/blog' render={() => <BlogWrapper locale={locale} />} />
    {urls.map(url =>
      <Route
        key={`/blog/${url}`}
        path={`/blog/${url}`}
        render={() => <ArticlePage data={url} locale={locale} />}
      />
    )}
    <Route render={NotFound} />
  </Switch>
);


const ArticlePage = ({ data, locale }) => {
  let req = {};
  if (locale === 'ru') {
    req = reqRU;
  } else {
    req = reqEN;
  }

  return (
    <div className='bg-what'><div className='container'>
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
};

export default withRouter(Blog);
