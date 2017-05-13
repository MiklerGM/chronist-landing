// import React from 'react';
// import { Link } from 'react-router-dom';
// import Moment from 'moment';
// import 'moment/locale/ru';

// const files = [
//   require('../md/Hello.md'),
//   require('../md/Second.md'),
//   require('../md/Third.md')
// ];



// class ArticlePage extends React.Component {
//   state = {}
//   render() {
//     return(
//       <div> Data: {this.props.data}  </div>
//     );
//   }
// }

// class ArticleGallery extends React.Component {
//   state = {}

//   getFormattedDate = (date) => {
//     Moment.locale('ru');

//     // const formattedDT = Moment(date).calendar();
//     const formattedDT = Moment(date).endOf('day').fromNow();
//     return formattedDT;
//   }

//   processArticle = (article, id) => (
//     <div key={`article_${id}`} className='col-md-4 col-sm-4 ArticlePreview'>
//       <h4> <strong> {article.title} </strong> </h4>
//       {/* <p> {this.getFormattedDate(article.date)} </p> */}
//       <div dangerouslySetInnerHTML={{ __html: article.__content.substring(0, article.__content.indexOf(' ', 260)) }} />;
//       <button>  <Link to={`/blog/ + ${article.date}`}> Читать дальше → </Link>  </button>
//     </div>
//   );

//   render() {
//     if (process.env.NODE_ENV === 'production') {
//       return null;
//     }
//     return (
//       <div id="ArticleGallery" className='row'><div className='bg-what'><div className='container'>
//         {files.map(this.processArticle)}
//         {
//           (process.env.NODE_ENV === 'production') ? null :
//           <Link to={'/blog'}><button className='btn-black text-center'> VIEW MORE</button></Link>
//         }
//       </div></div><hr /></div>
//     );
//   }
// }

// export default ArticleGallery;
