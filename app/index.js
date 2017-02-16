require('./index.html')
var React = require('react')
var ReactDOM = require('react-dom') 

import Timeline from './components/Timeline'
import Subscribe from './components/Subscribe'
import AppDescription from './components/AppDescription'
import ym from 'react-yandex-metrika';

require('bootstrap/dist/css/bootstrap.css')
require('font-awesome/css/font-awesome.css')
require('./styles/style.css')
require('./favicon.ico')

ym.init([42857239], {
  clickmap:true,
  trackLinks:true,
  accurateTrackBounce:true,
  webvisor:true
});

ym('hit', '/');


const footerPattern = require('./images/test.png')
const globus = require("./images/globus-full.svg")

const Navigation = () => (
  <nav className="navbar navbar-inverse navbar-absolute">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">Хронист</a>
    </div>

    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#what">О проекте </a></li>
        <li><a href="#AppDescription">Блог</a></li>
      </ul>

    </div>
  </div>
  </nav>
);

const Title = () => (
  <div id="title" className="container-fluid bg-overlay">
    <div className="row text-center">
      <div className="thumbnail">

          <h1> ХРОНИСТ </h1>
          <h2> Наглядная география </h2>
          <h4>историко-географический инструмент визуализации</h4><h4> интегрированных научных данных</h4>
        </div>
        <Subscribe />
     </div>

  </div>
);

const What = () => (
  <div id="what" className="container bg-what">

    {/* <div className="col-md-6 col-sm-6">
      <img src={globus} alt="Big Globus Picture" className="globus"/>
    </div>
    <div className="col-md-6 col-sm-6">
  */}


    <h3> Существующие инструменты не позволяют наглядно проследить взаимосвязи между историческими событиями в разных регионах.</h3>
     <h3>При помощи Хрониста можно не только решить эту проблему, но и самостоятельно отделить важные события от неважных, добавить новые, парой кликов собрать доклад или интерактивную презентацию, проверить свои догадки при помощи научно подтверждённых данных, расширить кругозор и в простой и занимательной форме вывести собственные причинно-следственные связи в мировой истории.</h3>
    </div>

);

const Contact = () => (
  <footer className="bg-footer">
    <div>
      <p>Хронист 2017</p>

    </div>
    <ul>
      <li><a href="mailto:contact@chronist.ru">Email </a></li>
      {/*<li><a href="http://localhost:8080/#team"> Team </a></li> */}
      <li><a href='https://vk.com/chronist'><i className="social fa fa-vk" aria-hidden="true"></i></a></li>
    </ul>



  </footer>
);



const Test =({})=> (
  <div>
            article_begin={article_begin}
            <p> </p>
            <span className="pull-left"> Модестов Сергей </span>
  </div>
);

class Hello extends React.Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        <Title />
        <What />
        <Timeline />
        <AppDescription />
        <Contact />

    </div>
    );
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('app')
);
