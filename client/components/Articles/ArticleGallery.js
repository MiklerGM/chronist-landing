import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import marked from 'marked';
import { loadFront } from 'yaml-front-matter';
import { distanceInWords } from 'date-fns';
import ruLoc from 'date-fns/locale/ru';
import enLoc from 'date-fns/locale/en';

import { lastUrls, sourceEN, sourceRU } from '../../articles/blogData';

class ArticlePreviewColumn extends React.Component {
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

  getHumanDate(date) {
    const lang = (this.props.locale === 'ru') ? ruLoc : enLoc;
    const word = (this.props.locale === 'ru') ? 'назад' : 'ago';
    return `${distanceInWords(new Date(), date, { locale: lang })} ${word}`;
  }

  getText = (content) => {
    const rawMarkup = marked(content, { sanitize: true });
    const shortMarkup = rawMarkup.slice(0, rawMarkup.indexOf(' ', 260));
    return { __html: shortMarkup };
  }

  render() {
    const post = loadFront(this.state.post);
    return (
      <div className='xlist--item'>
        <h4>
          {post.title}
        </h4>
        <span className='ArticleDate'>
          {this.getHumanDate(post.date)}
        </span>
        <div dangerouslySetInnerHTML={this.getText(post.__content)} />
        <Link to={`/blog/${this.props.url}`} className='readmore'>
          <FormattedMessage id='blog.readmore' />
        </Link>
      </div>
    );
  }
}

const ArticleGallery = ({ locale }) => (
  <div className='page--segment bg-gray'>
    <div className='page--content'>
      <div className='container'>
        <h2>
          <FormattedMessage id='home.lastarticles' />
        </h2>
        <div className='xlist'>
          {lastUrls.reverse().map(url => (
            <ArticlePreviewColumn key={url} url={url} locale={locale} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

ArticlePreviewColumn.propTypes = {
  locale: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

ArticleGallery.propTypes = {
  locale: PropTypes.string.isRequired
};

export default ArticleGallery;
