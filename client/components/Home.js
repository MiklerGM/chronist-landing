import React from 'react';

import Timeline from './Timeline/Timeline';
import Subscribe from './Subscribe';
import AppDescription from './AppDescription/AppDescription';
import { ArticleGallery } from './Blog/Blog';
import Tracking from './Tracking';
import What from './VideoCarousel/VideoGallery';

import TitleImage from '../images/title-white.png';
// import '../styles/style.less';
// if (process.env.WEBPACK) require('../styles/style.less'); // eslint-disable-line global-require

const OldTitle = () => (
  <div id="title">
    <div className="text-center">
      <h1> ХРОНИСТ </h1>
      <h2> Наглядная география </h2>
      <h4> историко-географический инструмент визуализации открытых научных данных </h4>
    </div>
    <Subscribe />
  </div>
);

const Title = () => (
  <div id="title">
    <div className='text-center'>
      <img src={TitleImage} />
      <h4>
         Мы хотим понимать как устроен мир. Находить причинно-следственные связи
         между событиями. Иметь возможность заглянуть в историю на своих условия,
         без толстых пыльных учебников и хрупких карт за стёклами музеев. Мы
         объединили исторические карты с последовательностью событий и добавили
         немного интерактивности.
      </h4>
    </div>
  </div>
);

const JumpToMap = () => (
  <div className='page--content'>
    <p className='text-center'>
      "Хронист" - сервис для самостоятельного изучения исторической географии.
      Мы используем данные открытых источников и не претендуем на абсолютную историческую точность, но очень стремимся к ней.
      Помимо карты мира как основного проекта мы занимаемся интерактивными курсами и визуализациями.
    </p>
    <a className='' href='https://demo.chronist.ru/'><button>Карта мира</button></a>
  </div>
);

class Home extends React.Component {
  render() {
    return (
      <div className="app" >
        <Title />
        <JumpToMap />
        <What />
        {/*
        <Tracking />
        */}
        <ArticleGallery />
        <Timeline />
        <AppDescription />
      </div>
    );
  }
}

export default Home;
