import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/less/bootstrap.less';

import Timeline from './components/Timeline';
import Subscribe from './components/Subscribe';
import AppDescription from './components/AppDescription';
import Footer from './components/Footer';

import './styles/style.less';
import './favicon.ico';
import './styles/fontello.less';
import './index.html';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      themeName: 'nav topnav',
      style: { float: 'right' },
    };
  }

  toggle(e) {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    if (!this.state.isOpen) {
      this.state.themeName = 'topnav nav';
      this.state.style = { float: 'right' };
    } else {
      this.state.themeName = 'topnav nav responsive';
      this.state.style = { float: 'none' };
    }

    return (
      <div id="home" className="container-fluid">
        <ul className={this.state.themeName}>
          <li><a href="#home">Хронист</a></li>
          <li style={this.state.style}><a href="#AppDescription">Блог</a></li>
          <li style={this.state.style}><a href="#what">О проекте </a></li>
          <li className="icon"><button onClick={this.toggle}><i className='fa icon-menu' /></button></li>
        </ul>
      </div>
    );
  }
}

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

class Hello extends React.Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        <Title />
        <What />
        <Timeline />
        <AppDescription />
        <Footer />
      </div>
    );
  }
}


ReactDOM.render((
  <Hello />
), document.getElementById('app'));
