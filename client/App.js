import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ym, { YMInitializer } from 'react-yandex-metrika';
import ReactGA from 'react-ga';

import { IntlProvider, addLocaleData } from 'react-intl';
import ru from 'react-intl/locale-data/ru';
import en from 'react-intl/locale-data/en';

import AppRouter from './routes';
import localeDataRU from './locales/ru.json';
import localeDataEN from './locales/en.json';

import './style.less';
import './App.less';

import './images/richpreview.png';
import './images/favicon.ico';

addLocaleData([...en, ...ru]);

const YM_CONFIG = {
  defer: false,
  clickmap: true,
  trackLinks: true,
  // accurateTrackBounce: true,
  // webvisor: true,
  trackHash: false
};
const GA_CONFIG = {
  debug: false,
  titleCase: false
};
ReactGA.initialize('UA-111740941-1', GA_CONFIG);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: 'ru',
      messages: localeDataRU
    };
  }

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
      <YMInitializer accounts={[42857239]} options={YM_CONFIG}>
        <IntlProvider
          locale={this.state.locale}
          key={this.state.locale}
          messages={this.state.messages}
        >
          <Router>
            <AppRouter
              onChangeLanguage={v => this.onChangeLanguage(v)}
              locale={this.state.locale}
            />
          </Router>
        </IntlProvider>
      </YMInitializer>
    );
  }
}

export default App;
