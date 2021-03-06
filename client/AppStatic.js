import React from 'react';
import {
  StaticRouter
} from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';
// import createMemoryHistory from 'history/createMemoryHistory';

import { YMInitializer } from 'react-yandex-metrika';
import ReactGA from 'react-ga';

import { IntlProvider } from 'react-intl';

import AppRouter from './routes';
import localeDataRU from './locales/ru.json';
import localeDataEN from './locales/en.json';

import './style.less';
import './App.less';

// define values for analytics services
const YmId = (process.env.NODE_ENV === 'production') ? [42857239, 42866674] : [42866674];
const GaId = 'UA-111740941-1';
ReactGA.initialize({ trackingId: GaId });

class AppStatic extends React.Component {
  state = {
    locale: 'ru',
    messages: localeDataRU
  };

  onChangeLanguage = (lang) => {
    switch (lang) {
      case 'ru': this.setState({ messages: localeDataRU }); break;
      case 'en': this.setState({ messages: localeDataEN }); break;
      default: this.setState({ messages: localeDataRU }); break;
    }
    this.setState({ locale: lang });
  }

  render() {
    return (
      <YMInitializer accounts={YmId} options={{ defer: true }}>
        <IntlProvider
          locale={this.state.locale}
          key={this.state.locale}
          messages={this.state.messages}
        >
          <StaticRouter location={this.props.location} context={this.props.context}>
            <AppRouter onChangeLanguage={this.onChangeLanguage} locale={this.state.locale} />
          </StaticRouter>
        </IntlProvider>
      </YMInitializer>
    );
  }
}

export default AppStatic;
