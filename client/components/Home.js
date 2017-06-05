import React from 'react';

import Timeline from './Timeline';
import Subscribe from './Subscribe';
import AppDescription from './AppDescription';
import { ArticleGallery } from './Blog';

// import '../styles/style.less';
// if (process.env.WEBPACK) require('../styles/style.less'); // eslint-disable-line global-require

const Title = () => (
  <div id="title">
    <div className="text-center">
      <h1> ХРОНИСТ </h1>
      <h2> Наглядная география </h2>
      <h4>историко-географический инструмент визуализации</h4>
      <h4>открытых научных данных</h4>
    </div>

    <Subscribe />
  </div>
);

const videoContent = require.context('../videos', false, /\.m4v$/);
const videoIndex = [];
videoContent.keys().forEach((fileName, id) => {
  videoIndex[id] = fileName;
});
const ContentDescription = ['Изменение границ', 'Экспортирование материала', 'Дополнительная информация по клику', 'Воспроизведение'];

class What extends React.Component {
  state = { currentPic: 0, }

  swap = (id) => {
    this.setState({ currentPic: id });
  }

  render() {

    return (
      <div id="what" className='row'>
        <div className='bg-what'>
              <div>
                <div className="block base00-background base07">00</div>
                <div className="block base01-background base07">01</div>
                <div className="block base02-background base07">02</div>
                <div className="block base03-background base07">03</div>
                <div className="block base04-background base00">04</div>
                <div className="block base05-background base00">05</div>
                <div className="block base06-background base00">06</div>
                <div className="block base07-background base00">07</div>
                <br />
                <div className="block base08-background base07">08</div>
                <div className="block base09-background base07">09</div>
                <div className="block base0A-background base07">0A</div>
                <div className="block base0B-background base07">0B</div>
                <div className="block base0C-background base07">0C</div>
                <div className="block base0D-background base07">0D</div>
                <div className="block base0E-background base07">0E</div>
                <div className="block base0F-background base07">0F</div>
          </div>

          <div className='container'>
            <div className="col-md-6 col-sm-6 text-center VideoGallery container">
              <video src={videoContent(videoIndex[this.state.currentPic])} autoPlay loop />
              <p> {ContentDescription[this.state.currentPic]} </p>


              <div className='row'>
                { videoContent.keys().map((fileName, id) =>
                <button
                  className='col-xs-3'
                  key={`vc_${fileName}`}
                  onClick={() => this.swap(id)}
                  title={ContentDescription[id]}
                >
                  <video
                    width='100'
                    src={videoContent(fileName)}
                  />
                </button>
              )}

              </div>

            </div>

            <div className="col-md-6 col-sm-6 what-desc container">
              <h4> Существующие инструменты не позволяют наглядно проследить
                взаимосвязи между историческими событиями в разных регионах.
              </h4>
              <h4>При помощи Хрониста можно не только решить эту проблему,
                но и самостоятельно отделить важные события от неважных, добавить новые,
                парой кликов собрать доклад или интерактивную презентацию, проверить свои
                догадки при помощи научно подтверждённых данных, расширить кругозор и в
                простой и занимательной форме вывести
                собственные причинно-следственные связи в мировой истории.
              </h4>
              <a className='btn btn-demo' href='https://demo.chronist.ru/'> Перейти к Демо</a>
            </div>

          </div>
        </div>
        <hr />
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div className="app" >
        <Title />
        <What />
        {/*
        */}
        <ArticleGallery />
        <Timeline />
        <AppDescription />
      </div>
    );
  }
}

export default Home;
