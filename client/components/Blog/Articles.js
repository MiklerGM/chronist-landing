import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route, Switch } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Moment from 'moment';
import 'moment/locale/ru';
import NotFound from '../NotFound';
import { Helmet } from 'react-helmet';

// import '../md/test.jpg';

// import '../styles/blog.less';
if (process.env.WEBPACK) require('./blog.less'); // eslint-disable-line global-require

const urls = [];
const req = require.context('../../md', false, /\.md$/);
req.keys().forEach((fileName, id) => {
  urls[id] = fileName.replace('./', '').replace('.md', '');
});

const getHumanDate = (date) => {
  Moment.locale('ru');
  // const formattedDT = Moment(date).calendar();
  const humanDT = Moment(date).endOf('day').fromNow();
  return humanDT;
};


const getFormattedDate = (date) => {
  Moment.locale('ru');
  const formattedDT = Moment(date).format('LL');
  return formattedDT;
};

const processArticle = (url, id) => (
  <div key={`article_${id}`} className='container ArticlePreview'>
    <h2> {req(`./${url}.md`).title} </h2>
    <div className='dim'>
      <span className='dim'> {req(`./${url}.md`).author} </span>
      <span className='separator'> - </span>
      <span className='dim'> {getFormattedDate(req(`./${url}.md`).date)} </span>
    </div>
    <div dangerouslySetInnerHTML={{ __html: req(`./${url}.md`).__content.slice(0, req(`./${url}.md`).__content.indexOf(' ', 400)) }} />
    <Link to={`/blog/${url}`}><button className='pull-right'> Читать дальше</button> </Link>
    <hr />
  </div>
);

export const ArticleList = () => (
  <div id="ArticleGallery" className='row'><div className='bg-what'><div className='container text-center center'>
    {urls.reverse().map(processArticle)}
  </div></div></div>
);


const processArticleGallery = (url, id) => {
  return (
    <div key={`article_${id}`} className='col-md-4 col-sm-4 ArticlePreview'>
      <h4> {req(`./${url}.md`).title} </h4>
      <span className='ArticleDate'> {getHumanDate(req(`./${url}.md`).date)} </span>
      <div dangerouslySetInnerHTML={{ __html: req(`./${url}.md`).__content.slice(0, req(`./${url}.md`).__content.indexOf(' ', 260)) }} />
      <Link to={`/blog/${url}`}><button> Читать дальше</button></Link>
    </div>
  )
};

export const ArticleGallery = () => (
  <div className='page--segment bg-gray'>
    <div className='page--content'>
      <div className='container'>
        <h2>
          <FormattedMessage
            id='home.lastarticles'
          />
        </h2>
        {urls.slice(-3).reverse().map(processArticleGallery)}
      </div>
    </div>
  </div>
);


const Blog = () => (
  <Switch>
    <Route exact path='/blog' component={BlogWrapper} />
    {urls.map(url =>
      <Route
        key={`/blog/${url}`}
        path={`/blog/${url}`}
        render={() => <ArticlePage data={url} />}
      />
    )}
    <Route render={NotFound} />
  </Switch>
);

// const Blog = () => (
//   <div> Dummy </div>
// );

class ArticlePage extends React.Component {
  render() {
    return (
        <div className='bg-what'><div className='container'>
          <Helmet
              meta={[
                { property: 'og:type', content: 'article' },
                { property: 'og:title', content: `${req(`./${this.props.data}.md`).title}` },
                { property: 'og:description', content: `${req(`./${this.props.data}.md`).tldr}` }
              ]}
            />

          <h2> {req(`./${this.props.data}.md`).title }</h2>
          <div className='dim'>
            <span className='dim'> {req(`./${this.props.data}.md`).author} </span>
            <span className='separator'> - </span>
            <span className='dim'> {getFormattedDate(req(`./${this.props.data}.md`).date)} </span>
          </div>
          <div className='ArticleContent' dangerouslySetInnerHTML={{ __html: req(`./${this.props.data}.md`).__content }} />
        </div>
        </div>
    );
  }
}

ArticlePage.PropTypes = {
  data: PropTypes.string.isRequired,
};

export default Blog;
