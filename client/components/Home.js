import React from 'react';

import Subscribe from './Subscribe';
import AppDescription from './AppDescription/AppDescription';
import { ArticleGallery } from './Blog/Blog';
import Team from './Company/Team';
import Features from './Timeline/Features';

const TitleImage = require('../images/title-white.png');
// import '../styles/style.less';
// if (process.env.WEBPACK) require('../styles/style.less'); // eslint-disable-line global-require

// const OldTitle = () => (
//   <div id="title">
//     <div className="text-center">
//       <h1> ХРОНИСТ </h1>
//       <h2> Наглядная география </h2>
//       <h4> историко-географический инструмент визуализации открытых научных данных </h4>
//     </div>
//     <Subscribe />
//   </div>
// );
class Title extends React.Component {
  render() {
    return (
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
  }
}

const JumpToMap = () => (
  <div className='page--content'>
    <div className='page--content--narrow'>
      <p>
        "Хронист" - сервис для самостоятельного изучения исторической географии.
        Мы используем данные открытых источников и не претендуем на абсолютную историческую точность, но очень стремимся к ней.
        Помимо карты мира как основного проекта мы занимаемся интерактивными курсами и визуализациями.
      </p>
      <a className='' href='https://demo.chronist.ru/'><button>Карта мира</button></a>
    </div>
  </div>
);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lazy: null,
    };
  }

  async LoadFeatures() {
    const { default : Features } = await import(/* webpackChunkName: "features" */ './Timeline/Features');
    this.setState({ lazy: Features });
  }

  componentDidMount = async () => {
    await this.LoadFeatures();
  }

  render() {
    const Features = this.state.lazy;

    return (
      <div className="app" >
        <Title />
        <JumpToMap />
        {/*
        <What />
        <Tracking />
        <Timeline />
        <Features />
        */}
        <ArticleGallery />
        {Features ? (
          <Features />
          ) : (
            <div />
        )}
        <Subscribe />
        <AppDescription />
        <Team />
      </div>
    );
  }
}

// const Home = () => (
//   <div className="app" >
//     <Title />
//     <AppDescription />
//     <JumpToMap />
//     <ArticleGallery />
//     <Subscribe />
//     <Team />
//     <Features />
//   </div>
// );

export default Home;
