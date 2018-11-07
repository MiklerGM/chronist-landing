import React, { Component } from 'react';
import { loadFront } from 'yaml-front-matter';
import marked from 'marked';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import source from '../articles/InfoSources.md';

class License extends Component {
  state = {
    post: ''
  }

  componentDidMount() {
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
              id='license.title'
            />
          </h1>
          <div className='ArticleContent'>
            <FormattedHTMLMessage id='license.text' />
          </div>
          <div
            className='ArticleContent'
            dangerouslySetInnerHTML={this.getText()}
          />
        </div>
      </div>
    );
  }
}

export default License;
