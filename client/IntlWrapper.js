import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider, addLocaleData } from 'react-intl';

import ru from 'react-intl/locale-data/ru';
import en from 'react-intl/locale-data/en';

import localeDataRU from './locales/ru.json';
import localeDataEN from './locales/en.json';

class IntlWrapper extends React.Component {
  render() {
    return (
      <IntlProvider
        locale={this.props.locale}
        key={this.props.locale}
        messages={this.props.messages}
      >
        {this.props.children}
      </IntlProvider>
    );
  }
}

IntlWrapper.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object
};

IntlWrapper.defaultProps = {
  locale: 'ru',
  messages: localeDataRU
};

export default IntlWrapper;