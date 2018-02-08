import React from 'react';
import {
  BrowserRouter as Router,
  browserHistory
} from 'react-router-dom';

import { YMInitializer } from 'react-yandex-metrika';
import ReactGA from 'react-ga';

import { IntlProvider, addLocaleData } from 'react-intl';
import ru from 'react-intl/locale-data/ru';
import en from 'react-intl/locale-data/en';

import AppRouter from './routes';
import localeDataRU from './locales/ru.json';
import localeDataEN from './locales/en.json';

addLocaleData([...en, ...ru]);

if (process.env.WEBPACK) {
  // require('./styles/nav-router.less'); // eslint-disable-line global-require
  require('./fontello.less'); // eslint-disable-line global-require
  require('./App.less'); // eslint-disable-line global-require
}

// define values for analytics services
const YmId = (process.env.NODE_ENV === 'production') ? [42857239, 42866674] : [42866674];
const GaId = 'UA-111740941-1';
ReactGA.initialize({ trackingId: GaId });

const language = (navigator.languages && navigator.languages[0]) ||
  navigator.language || navigator.userLanguage;
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

/* Define translations */
const config = {
  locale: languageWithoutRegionCode,
};

switch (languageWithoutRegionCode) {
  case 'ru': config.messages = localeDataRU; break;
  case 'en': config.messages = localeDataEN; break;
  default: config.locale = 'en'; config.messages = localeDataEN; break;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: languageWithoutRegionCode
    };
  }

  onChangeLanguage = (lang) => {
    switch (lang) {
      case 'ru': config.messages = localeDataRU; break;
      case 'en': config.messages = localeDataEN; break;
      default: config.messages = localeDataEN; break;
    }
    this.setState({ locale: lang });
    config.locale = lang;
  }

  render() {
    return (
      <YMInitializer accounts={YmId} options={{ defer: true }} >
        <IntlProvider
          locale={config.locale}
          key={config.locale}
          messages={config.messages}
        >
          <Router history={browserHistory}>
            <AppRouter onChangeLanguage={this.onChangeLanguage} locale={this.state.locale} />
          </Router>
        </IntlProvider>
      </YMInitializer>
    );
  }
}

export default App;
