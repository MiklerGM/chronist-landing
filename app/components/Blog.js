import React from 'react';
import { Link, IndexRoute, Router, Route, browserHistory } from 'react-router';
import Moment from 'moment';
import 'moment/locale/ru';
import '../styles/blog.less';

const files = [
  require('../md/Hello.md'),
  require('../md/Second.md'),
  require('../md/Third.md')
];

export default class Blog extends React.Component {
  state = {}

  getFormattedDate(date) {
    Moment.locale('ru');

    // const formattedDT = Moment(date).calendar();
    const formattedDT = Moment(date).endOf('day').fromNow();
    return formattedDT;
  }

  processArticle = (article, id) => (
    <div key={`article_${id}`}>
      <h2> {article.title} </h2>
      <p> {this.getFormattedDate(article.date)} </p>
      <div dangerouslySetInnerHTML={{ __html: article.__content.substring(0, article.__content.indexOf(' ', 260)) }} />;

    </div>
  );

  render() {
    if (process.env.NODE_ENV === 'production') {
      return null;
    }
    return (
      <div>
        <h1 id='pageTitle'> Блог </h1>
        <div id="ArticleGallery" className='row'><div className='bg-what'><div className='container text-center center'>
          {files.map(this.processArticle)}
        </div></div></div>
      </div>
    );
  }
}

class ArticlePage extends React.Component {
  state = {}
  render() {
    return(
      <div> ArticlePage render </div>
    );
  }
}
