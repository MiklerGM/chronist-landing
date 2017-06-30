import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route, Switch } from 'react-router-dom';
import Moment from 'moment';
import 'moment/locale/ru';
import NotFound from './NotFound';
import { Helmet } from 'react-helmet';

// import '../md/test.jpg';

// import '../styles/blog.less';
if (process.env.WEBPACK) require('../styles/blog.less'); // eslint-disable-line global-require

const urls = [];const req = require.context('../md', false, /\.md$/);
req.keys().forEach((fileName, id) => {
  urls[id] = fileName.replace('./', '').replace('.md', '');
});

const getHumanDate = (date) => {
  Moment.locale('ru');
  // const formattedDT = Moment(date).calendar();
  const humanDT = Moment(date).endOf('day').fromNow();
  return humanDT;
};


const getFormattedDate = (date) => {
  Moment.locale('ru');
  // const formattedDT = Moment(date).calendar();
  const formattedDT = Moment(date).format('LL');
  return formattedDT;
};

const processArticle = (url, id) => (
  <div key={`article_${id}`} className='container ArticlePreview'>
    <h2> {req(`./${url}.md`).title} </h2>
    <div className='dim'>
      <span className='dim'> {req(`./${url}.md`).author} </span>
      <span className='separator'> - </span>
      <span className='dim'> {getFormattedDate(req(`./${url}.md`).date)} </span>
    </div>
    <div dangerouslySetInnerHTML={{ __html: req(`./${url}.md`).__content.substring(0, req(`./${url}.md`).__content.indexOf(' ', 400)) }} />
    <Link to={`/blog/${url}`}><button className='pull-right'> Читать дальше</button> </Link>
    <hr />
  </div>
);

const BlogWrapper = () => (
  <div>
    <Helmet
      title='Блог'
      meta={[
        { name: 'description', content: 'Хронист Блог' },
        { property: 'og:type', content: 'article_' },
        { property: 'og:title', content: 'Блог' }
      ]}
    />

    <h1 id='pageTitle'> Блог </h1>
    <div id="ArticleGallery" className='row'><div className='bg-what'><div className='container text-center center'>
      {urls.reverse().map(processArticle)}
    </div></div></div>
  </div>
);


const processArticleGallery = (url, id) => {
  console.log(req(`./${url}.md`).imgpath);
  return (
    <div key={`article_${id}`} className='col-md-4 col-sm-4 ArticlePreview'>
      <h4> {req(`./${url}.md`).title} </h4>
      <p className='ArticleDate'> {getHumanDate(req(`./${url}.md`).date)} </p>
      <div dangerouslySetInnerHTML={{ __html: req(`./${url}.md`).__content.substring(0, req(`./${url}.md`).__content.indexOf(' ', 260)) }} />
      <Link to={`/blog/${url}`}><button> Читать дальше</button></Link>
    </div>
  )
};

export const ArticleGallery = () => (
  <div id="ArticleGallery" className='row'><div className='bg-what'><div className='container'>
    <h2> Последние записи </h2>
    {urls.reverse().map(processArticleGallery)}
  </div></div><hr /></div>
);


const Blog = () => (
  <Switch>
    <Route exact path='/blog' component={BlogWrapper} />
    {urls.map(url =>
      <Route
        key={`/blog/${url}`}
        path={`/blog/${url}`}
        render={() => <ArticlePage data={url} />}
      />
    )}
    <Route render={NotFound} />
  </Switch>
);

// const Blog = () => (
//   <div> Dummy </div>
// );

class ArticlePage extends React.Component {

  render() {
    return (
        <div className='bg-what'><div className='container'>
          <Helmet
              meta={[
                { property: 'og:type', content: 'article' },
                { property: 'og:title', content: `${req(`./${this.props.data}.md`).title}` },
                { property: 'og:description', content: `${req(`./${this.props.data}.md`).tldr}` }
              ]}
            />

          <h2> {req(`./${this.props.data}.md`).title }</h2>
          <div className='dim'>
            <span className='dim'> {req(`./${this.props.data}.md`).author} </span>
            <span className='separator'> - </span>
            <span className='dim'> {getFormattedDate(req(`./${this.props.data}.md`).date)} </span>
          </div>
          <div className='ArticleContent' dangerouslySetInnerHTML={{ __html: req(`./${this.props.data}.md`).__content }} />;
        </div>
        </div>
    );
  }
}

ArticlePage.PropTypes = {
  data: PropTypes.string.isRequired,
};

// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.less';
// import 'slick-carousel/slick/slick-theme.less';
// class ArticleSlider extends React.Component {
//   render() {
//     const settings = {
//       arrows: true,
//       infinite: true,
//       // dots: true,
//       autoplay: false,
//       slidesToShow: 3,
//       slidesToScroll: 3
//     };

//     return (
//       <div id='ArticleSlider' className='row'><div className='bg-what'>
//         <div className='container'>
//           <Slider {...settings}>
//             <div> 1 </div>
//             <div> 2 </div>
//             <div> 3 </div>
//             <div> 4 </div>
//             <div> 5 </div>
//             <div> 6 </div>
//           </Slider>
//         </div>
//       </div></div>
//     );
//   }
// }

export default Blog;
