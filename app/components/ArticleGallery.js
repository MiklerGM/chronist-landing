import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import 'moment/locale/ru';

// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.less';
// import 'slick-carousel/slick/slick-theme.less';

const files = [
  require('../md/Hello.md'),
  require('../md/Second.md'),
  require('../md/Third.md')
];

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

export default class ArticleGalleryDev extends React.Component {
  state = {}

  getFormattedDate = date => {
    Moment.locale('ru');

    // const formattedDT = Moment(date).calendar();
    const formattedDT = Moment(date).endOf('day').fromNow();
    return formattedDT;
  }

  processArticle = (article, id) => (
    <div key={`article_${id}`} className='col-md-4 col-sm-4 ArticlePreview'>
      <h4> <strong> {article.title} </strong> </h4>
      {/* <p> {this.getFormattedDate(article.date)} </p> */}
      <div dangerouslySetInnerHTML={{ __html: article.__content.substring(0, article.__content.indexOf(' ', 260)) }} />;
      <button> <Link to="/blog"> Читать дальше → </Link></button>
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
