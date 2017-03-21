import React from 'react';

import { Initializer as YM } from 'react-yandex-metrika';
import ym from 'react-yandex-metrika';

class Footer extends React.Component {
  constructor() {
    super();

    // Initializing tracking ID created from YM
    ym.init([42857239]);
    // This just needs to be called once to grab stats
    ym('hit', '/');
  }

  render() {
    return (
      <footer className="bg-footer">
        <div>
          <p>Хронист 2017</p>
          <YM />
        </div>
        <ul>
          <li><a href="mailto:contact@chronist.ru">Email </a></li>
          <li><a href='https://vk.com/chronist'><span className="social fa icon-vkontakte" aria-hidden="true"></span></a></li>
        </ul>
      </footer>
    );
  }
}

class FooterDev extends React.Component {
  render() {
    return (
        <div> Dev </div>
    );
  }
}

export default Footer;

