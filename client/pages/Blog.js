import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { format } from 'date-fns';
import { loadFront } from 'yaml-front-matter';
import { enGB, ru } from 'date-fns/locale';

import { urls, sourceEN, sourceRU } from '../articles/blogData';

class BlogArticlePreview extends React.Component {
  state = {
    post: ''
  }

  componentDidMount() {
    const source = (this.props.locale === 'ru') ? sourceRU : sourceEN;
    fetch(source[this.props.url])
      .then(res => res.text())
      .then(post => this.setState(state => ({ ...state, post })))
      .catch(err => console.error(err));
  }

  getFormattedDate(date) {
    const lang = (this.props.locale === 'ru') ? ru : enGB;
    return format(date, 'D MMMM YYYY', { locale: lang });
  }

  getText = (content) => {
    const rawMarkup = marked(content, { sanitize: true });
    const shortMarkup = rawMarkup.slice(0, rawMarkup.indexOf(' ', 400));
    return { __html: shortMarkup };
  }

  render() {
    const post = loadFront(this.state.post);
    return (
      <div className='container'>
        <h2>
          {post.title}
        </h2>
        <div className='dim'>
          <span className='dim'>
            {post.author}
          </span>
          <span className='separator'> - </span>
          <span className='dim'>
            {this.getFormattedDate(post.date)}
          </span>
        </div>
        <div dangerouslySetInnerHTML={this.getText(post.__content)} />
        <Link to={`/blog/${this.props.url}`} className='pull-right readmore'>
          <FormattedMessage id='blog.readmore' />
        </Link>
        <hr />
      </div>
    );
  }
}

const Blog = ({ locale }) => (
  <div className='page--segment'>
    <Helmet
      title='Блог'
      meta={[
        { name: 'description', content: 'Хронист Блог' },
        { property: 'og:type', content: 'article' },
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
        {urls.map(url => <BlogArticlePreview key={`article_${url}`} url={url} locale={locale} />)}
      </div>
    </div>
  </div>
);

BlogArticlePreview.propTypes = {
  locale: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

Blog.propTypes = {
  locale: PropTypes.string.isRequired
};

export default Blog;
