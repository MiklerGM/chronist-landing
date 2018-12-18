import React from 'react';
import PropTypes from 'prop-types';
import ym from 'react-yandex-metrika';

class LocaleWidget extends React.Component {
  changeToEn() {
    this.props.onChangeLanguage('en');
  }

  changeToRu() {
    this.props.onChangeLanguage('ru');
  }

  toggleLocale() {
    if (this.props.locale === 'en') {
      this.props.onChangeLanguage('ru');
    } else {
      this.props.onChangeLanguage('en');
    }
  }

  render() {
    if (!this.props.min) {
      return (
        <p>
          <button
            onClick={() => this.changeToEn()}
            className={`locale--toggle ${(this.props.locale === 'en') ? 'active' : ''}`}
            // style={(this.props.locale === 'en') ? { color: '#ffffff' } : { color: '#ffffff' }}
          >
            English
          </button>
          { ' | ' }
          <button
            onClick={() => this.changeToRu()}
            className={`locale--toggle ${(this.props.locale === 'ru') ? 'active' : ''}`}
            // style={(this.props.locale === 'ru') ? { color: '#ffffff' } : null}
          >
            Русский
          </button>
        </p>
      );
    }
    return (
      <a onClick={() => this.toggleLocale()}>
        {this.props.locale === 'en' ? 'RU' : 'EN'}
      </a>
    );
  }
}

LocaleWidget.propTypes = {
  locale: PropTypes.string.isRequired,
  onChangeLanguage: PropTypes.func.isRequired
};

export default LocaleWidget;
