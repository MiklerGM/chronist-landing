import React from 'react';
import Moment from 'moment';
import 'moment/locale/ru';

// const one = require('../md/Hello.md');
// const two = require('../md/Second.md');
// const three = require('../md/Third.md');

// const files = require('../md/');

const files = [
  require('../md/Hello.md'),
  require('../md/Second.md'),
  require('../md/Third.md')
];

export default class ArticleGalleryDev extends React.Component {
  state = {}

  getFormattedDate(date) {
    Moment.locale('ru');

    // const formattedDT = Moment(date).calendar();
    const formattedDT = Moment(date).endOf('day').fromNow();
    return formattedDT;
  }

  processArticle = (article, id) => (
    <div key={`article_${id}`} className='col-md-4 col-sm-4'>
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
      <div id="ArticleGallery" className='row'><div className='bg-what'><div className='container'>
        {files.map(this.processArticle)}
      </div></div></div>
    );
  }
}
