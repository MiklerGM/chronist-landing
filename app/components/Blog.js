import React from 'react';
import { Link, IndexRoute, Router, Route, browserHistory } from 'react-router';
// import 'github-markdown-css';

import '../styles/blog.less';

const article = require('../md/Hello.md');


class Blog extends React.Component {
  render() {
    return (
      <div className="row text-center">
        <div id='blog' className="container-fluid bg-overlay">
          <h1> БЛОГ </h1>
        </div>

        <div className='bg-what'>
          <Article />
        </div>

      </div>
    );
  }
}


class Article extends React.Component {
  state = {}

  componentDidMount() {
    console.log(article);
    console.log('test');
  }

  createMarkup() {
    {}
  }

  render() {
    return (
      <div>
        <h2> {article.title} </h2>
        <div dangerouslySetInnerHTML={{ __html: article.__content.substring(0, article.__content.indexOf(" ", 260)) }} />;
      </div>
    );
  }

}
export default Blog;
