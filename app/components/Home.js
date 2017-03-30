import React from 'react';

import Timeline from './Timeline';
import Subscribe from './Subscribe';
import AppDescription from './AppDescription';
import Footer from './Footer';

const Title = () => (
  <div id="title" className="container-fluid bg-overlay">
    <div className="row text-center">
      <h1> ХРОНИСТ </h1>
      <h2> Наглядная география </h2>
      <h4>историко-географический инструмент визуализации</h4>
      <h4> интегрированных научных данных</h4>
    </div>
    <Subscribe />
  </div>
);

const What = () => (
  <div id="what" className="container-fluid bg-what">
    <h3> Существующие инструменты не позволяют наглядно проследить взаимосвязи между историческими событиями в разных регионах.</h3>
    <h3>При помощи Хрониста можно не только решить эту проблему, но и самостоятельно отделить важные события от неважных, добавить новые, парой кликов собрать доклад или интерактивную презентацию, проверить свои догадки при помощи научно подтверждённых данных, расширить кругозор и в простой и занимательной форме вывести собственные причинно-следственные связи в мировой истории.</h3>
  </div>
);

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
