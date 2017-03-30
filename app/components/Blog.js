import React from 'react';
import { Link, IndexRoute, Router, Route, browserHistory } from 'react-router';
// import 'github-markdown-css';

// import '../styles/blog.less';

// eslint-disable-next-line import/no-webpack-loader-syntax
// const webpackRequireContext = require.context('!markdown-with-front-matter!../_posts', false, /\.md$/);
// const blogs = webpackRequireContext.keys().reduce((memo, fileName) => memo.set(fileName.match(/\.\/([^\.]+)\.*/)[1], webpackRequireContext(fileName)), new Map());
//
// const blogIndex = (blogs) => () => <ul>{[...blogs.keys()].map(path => <li key={path}><Link to={'/'+path}>{blogs.get(path).title || path}</Link></li>)}</ul>;
// const blogWrapper = ({ __content }) => () => <div><Link to='/'>« Back to blog</Link><hr /><div className='markdown-body' dangerouslySetInnerHTML={{__html: __content}}></div></div>;
//
// const reactRoutes = [<IndexRoute key='index' component={blogIndex(blogs)} />].concat([...blogs.keys()].map(path => <Route key={path} path={path} component={blogWrapper(blogs.get(path))} />));

class Blog extends React.Component {
  render() {
    return (
      <div className="row text-center">
        <div id='blog' className="container-fluid bg-overlay">
          <h1> БЛОГ </h1>
        </div>

        <div className='bg-what'>
          Text
        </div>

      </div>
    );
  }
}

export default Blog;
