import * as React from 'react';
import marked from 'marked';

import source from '../articles/Legal.md';

class Legal extends React.Component {
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
    const rawMarkup = marked(this.state.post, { sanitize: true });
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div id='faq' className='page--segment'>
        <div className='page--content'>
          <h1 id='pageTitle' className='text-center'>
            Соглашение об использовании материалов и сервисов интернет-сайта
            <br />
            <small>(пользовательское соглашение)</small>
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


export default Legal;
