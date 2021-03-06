import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ym, { YMInitializer } from 'react-yandex-metrika';
import ReactGA from 'react-ga';

import AppRouter from './routes';
import IntlWrapper from './IntlWrapper';
import localeDataRU from './locales/ru.json';
import localeDataEN from './locales/en.json';

import './style.less';
import './App.less';

import './images/richpreview.png';
import './images/favicon.ico';


const YM_CONFIG = {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true
};
const GA_CONFIG = {
  debug: false,
  titleCase: false
};
ReactGA.initialize('UA-111740941-1', GA_CONFIG);

class App extends React.Component {
  state = {
    locale: 'ru',
    messages: localeDataRU
  };

  onChangeLanguage(lang) {
    switch (lang) {
      case 'ru': this.setState({ messages: localeDataRU }); ym('reachGoal', 'localeChangeRu'); break;
      case 'en': this.setState({ messages: localeDataEN }); ym('reachGoal', 'localeChangeEn'); break;
      default: this.setState({ messages: localeDataRU }); break;
    }
    this.setState({ locale: lang });
  }

  render() {
    return (
      <YMInitializer accounts={[42857239]} options={YM_CONFIG} version='2'>
        <IntlWrapper
          locale={this.state.locale}
          key={this.state.locale}
          messages={this.state.messages}
        >
          <Router>
            <AppRouter
              onChangeLanguage={(v) => this.onChangeLanguage(v)}
              locale={this.state.locale}
            />
          </Router>
        </IntlWrapper>
      </YMInitializer>
    );
  }
}

export default App;
