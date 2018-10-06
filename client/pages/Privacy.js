import React from 'react';
import marked from 'marked';
import { loadFront } from 'yaml-front-matter';

import source from '../articles/Privacy.md';


class Privacy extends React.Component {
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
      <div id='privacy' className='page--segment'>
        <div className='page--content'>
          <h1 id='pageTitle' className='text-center'> Правила защиты персональных данных </h1>
          <div
            className='ArticleContent'
            dangerouslySetInnerHTML={this.getText()}
          />
        </div>
      </div>
    );
  }
}


export default Privacy;
