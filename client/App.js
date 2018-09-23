import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { YMInitializer } from 'react-yandex-metrika';
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

// define values for analytics services
const YmId = (process.env.NODE_ENV === 'production') ? [42857239, 42866674] : [42866674];
const YM_CONFIG = {
  defer: true,
  clickmap: false,
  trackLinks: true,
  // accurateTrackBounce: true,
  // webvisor: true,
  trackHash: true
};
const GA_CONFIG = {
  debug: true,
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
      case 'ru': this.setState({ messages: localeDataRU }); break;
      case 'en': this.setState({ messages: localeDataEN }); break;
      default: this.setState({ messages: localeDataRU }); break;
    }
    this.setState({ locale: lang });
  }

  render() {
    return (
      <YMInitializer accounts={YmId} options={YM_CONFIG}>
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
