import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import { loadFront } from 'yaml-front-matter';
import { FormattedMessage } from 'react-intl';

import sourceRU from '../articles/FaqRU.md';
import sourceEN from '../articles/FaqEN.md';

class Faq extends React.Component {
  state = {
    post: ''
  }

  componentDidMount() {
    const source = (this.props.locale === 'ru') ? sourceRU : sourceEN;
    fetch(source)
      .then(res => res.text())
      .then(post => this.setState(state => ({ ...state, post })))
      .catch(err => console.error(err));
  }

  getText() {
    const obj = loadFront(this.state.post);
    const rawMarkup = marked(obj.__content, { sanitize: true });
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div id='faq' className='page--segment'>
        <div className='page--content'>
          <h1 id='pageTitle' className='text-center'>
            <FormattedMessage
              id='faq.title'
            />
          </h1>
          <div
            className='ArticleContent'
            dangerouslySetInnerHTML={this.getText()}
          />
        </div>
      </div>
    );
  }
}

Faq.propTypes = {
  locale: PropTypes.string.isRequired
};

export default Faq;
