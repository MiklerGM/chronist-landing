import React from 'react';

import Timeline from './Timeline';
import Subscribe from './Subscribe';
import AppDescription from './AppDescription';
import Footer from './Footer';

import '../styles/style.less';

const content = [
  require('../images/showcase1.mp4'),
  require('../images/showcase2.mp4'),
  require('../images/showcase3.mp4'),
  require('../images/showcase4.mp4'),
];
//  const content = ['first string', 'second string', 'third'];

const Title = () => (
  <div id="title" className="row">
    <div className="text-center">
      <h1> ХРОНИСТ </h1>
      <h2> Наглядная география </h2>
      <h4>историко-географический инструмент визуализации</h4>
      <h4>открытых научных данных</h4>
      <a className='btn btn-primary' href='https://demo.chronist.ru/'> Перейти к Демо</a>
    </div>

    <Subscribe />
  </div>
);

const What = () => (
  <div id="what" className='row'>
    <div className="bg-what">
      <div className='container'>
        <h3> Существующие инструменты не позволяют наглядно проследить
         взаимосвязи между историческими событиями в разных регионах.</h3>
        <h3>При помощи Хрониста можно не только решить эту проблему,
         но и самостоятельно отделить важные события от неважных,
          добавить новые, парой кликов собрать доклад или интерактивную презентацию,
           проверить свои догадки при помощи научно подтверждённых данных,
            расширить кругозор и в простой и занимательной форме вывести
             собственные причинно-следственные связи в мировой истории.</h3>
      </div>
    </div>
  </div>
);

class WhatNew extends React.Component {
  state = { currentPic: 0, }

  swap = (id) => {
    this.setState({ currentPic: (this.state.currentPic + id) % content.length });
  }

  render() {
    return (
      <div id="what" className='row'>
        <div className='bg-what'>
          <div className='container'>
            <div className="col-md-6 col-sm-6 text-center gallery container">

                <video src={content[this.state.currentPic]} autoPlay />

                <div className='row'>
                  <button className='col-xs-4' onClick={() => this.swap(1)} >
                    <video width='100' src={content[(this.state.currentPic + 1) % content.length]} />
                  </button>
                  <button className='col-xs-4' onClick={() => this.swap(2)} >
                    <video width='100' src={content[(this.state.currentPic + 2) % content.length]} />
                  </button>
                  <button className='col-xs-4' onClick={() => this.swap(3)} >
                    <video width='100' src={content[(this.state.currentPic + 3) % content.length]} />
                  </button>
                </div>

            </div>

            <div className="col-md-6 col-sm-6 container">
              <h3> Существующие инструменты не позволяют наглядно проследить
                взаимосвязи между историческими событиями в разных регионах.
              </h3>
              <h3>При помощи Хрониста можно не только решить эту проблему,
                но и самостоятельно отделить важные события от неважных, добавить новые,
                парой кликов собрать доклад или интерактивную презентацию, проверить свои
                догадки при помощи научно подтверждённых данных, расширить кругозор и в
                простой и занимательной форме вывести
                собственные причинно-следственные связи в мировой истории.
              </h3>
            </div>

          </div>
        </div>
      </div>
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
