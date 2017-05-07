import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.less';
import 'slick-carousel/slick/slick-theme.less';

import Timeline from './Timeline';
import Subscribe from './Subscribe';
import AppDescription from './AppDescription';
import Footer from './Footer';

import '../styles/style.less';

const Content = [
  require('../videos/borderchanges.m4v'),
  require('../videos/export.m4v'),
  require('../videos/pins.m4v'),
  require('../videos/play.m4v'),
];

const ContentDescription = ['Изменение границ', 'Экспортирование материала', 'Дополнительная информация по клику', 'Воспроизведение'];

const Title = () => (
  <div id="title" className="row">
    <div className="text-center">
      <h1> ХРОНИСТ </h1>
      <h2> Наглядная география </h2>
      <h4>историко-географический инструмент визуализации</h4>
      <h4>открытых научных данных</h4>

    </div>

    <Subscribe />
  </div>
);

const WhatOld = () => (
  <div id="what" className='row'>
    <div className="bg-what">
      <div className='container'>
        <h4> Существующие инструменты не позволяют наглядно проследить
         взаимосвязи между историческими событиями в разных регионах.</h4>
        <h4>При помощи Хрониста можно не только решить эту проблему,
         но и самостоятельно отделить важные события от неважных,
          добавить новые, парой кликов собрать доклад или интерактивную презентацию,
           проверить свои догадки при помощи научно подтверждённых данных,
            расширить кругозор и в простой и занимательной форме вывести
             собственные причинно-следственные связи в мировой истории.</h4>
      </div>
    </div>
  </div>
);

class What extends React.Component {
  state = { currentPic: 0, }

  swap = (id) => {
    this.setState({ currentPic: (this.state.currentPic + id) % Content.length });
  }

  render() {
    return (
      <div id="what" className='row'>
        <div className='bg-what'>
          <div className='container'>
            <div className="col-md-6 col-sm-6 text-center gallery container">
              <video src={Content[this.state.currentPic]} autoPlay />
              <p> {ContentDescription[this.state.currentPic]} </p>
              <div className='row'>
                <button className='col-xs-4' onClick={() => this.swap(1)} >
                  <video width='100' src={Content[(this.state.currentPic + 1) % Content.length]} />
                </button>
                <button className='col-xs-4' onClick={() => this.swap(2)} >
                  <video width='100' src={Content[(this.state.currentPic + 2) % Content.length]} />
                </button>
                <button className='col-xs-4' onClick={() => this.swap(3)} >
                  <video width='100' src={Content[(this.state.currentPic + 3) % Content.length]} />
                </button>
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
              <a className='btn btn-primary' href='https://demo.chronist.ru/'> Перейти к Демо</a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

class ArticleSlider extends React.Component {
  render() {
    const settings = {
      arrows: true,
      infinite: true,
      // dots: true,
      autoplay: false,
      slidesToShow: 3,
      slidesToScroll: 3
    };

    return (
      <div id='ArticleSlider' className='row'><div className='bg-what'>
        <div className='container'>
          <Slider {...settings}>
            <div> 1 </div>
            <div> 2 </div>
            <div> 3 </div>
            <div> 4 </div>
            <div> 5 </div>
            <div> 6 </div>
          </Slider>
        </div>
      </div></div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div className="app">
        <Title />
        <What />
        <Timeline />
        <AppDescription />
        <Footer />
      </div>
    );
  }
}

export default Home;
