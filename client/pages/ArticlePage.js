import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { format } from 'date-fns';
import ruLoc from 'date-fns/locale/ru';
import enLoc from 'date-fns/locale/en';

import { reqRU, reqEN } from '../articles/blogData';

class ArticlePage extends React.Component {
  getFormattedDate(date) {
    const lang = (this.props.locale === 'ru') ? ruLoc : enLoc;
    return format(date, 'D MMMM YYYY', { locale: lang });
  }

  render() {
    const req = (this.props.locale === 'ru') ? reqRU : reqEN;
    return (
      <div className='page--segment'><div className='page--content'>
        <Helmet
          meta={[
            { property: 'og:type', content: 'article' },
          ]}
        />
        <h2> {req(`./${this.props.data}.md`).title }</h2>
        <div className='dim'>
          <span className='dim'> {req(`./${this.props.data}.md`).author} </span>
          <span className='separator'> - </span>
          <span className='dim'> {this.getFormattedDate(req(`./${this.props.data}.md`).date)} </span>
        </div>
        <div className='ArticleContent' dangerouslySetInnerHTML={{ __html: req(`./${this.props.data}.md`).__content }} />
      </div></div>
    );
  }
}

ArticlePage.propTypes = {
  data: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired
};

export default ArticlePage;
