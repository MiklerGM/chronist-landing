import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import { Helmet } from 'react-helmet';
import { format } from 'date-fns';
import { loadFront } from 'yaml-front-matter';
import ruLoc from 'date-fns/locale/ru';
import enLoc from 'date-fns/locale/en';

import { sourceEN, sourceRU } from '../articles/blogData';

class ArticlePage extends React.Component {
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
    const lang = (this.props.locale === 'ru') ? ruLoc : enLoc;
    return format(date, 'D MMMM YYYY', { locale: lang });
  }

  getText = (content) => {
    const rawMarkup = marked(content, { sanitize: true });
    return { __html: rawMarkup };
  }

  render() {
    const post = loadFront(this.state.post);

    return (
      <div className='page--segment'>
        <div className='page--content'>
          <Helmet
            meta={[
              { property: 'og:type', content: 'article' },
            ]}
          />
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
          <div
            className='ArticleContent'
            dangerouslySetInnerHTML={this.getText(post.__content)}
          />
        </div>
      </div>
    );
  }
}

ArticlePage.propTypes = {
  url: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired
};

export default ArticlePage;
