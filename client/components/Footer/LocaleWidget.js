import React from 'react';
import PropTypes from 'prop-types';

class LocaleWidget extends React.Component {
  changeToEn() {
    this.props.onChangeLanguage('en');
  }

  changeToRu() {
    this.props.onChangeLanguage('ru');
  }

  toggleLocale() {
    if (this.props.locale === 'en') {
      this.props.onChangeLanguage('ru')
    } else {
      this.props.onChangeLanguage('en');
    }
  }

  render() {
    if (!this.props.min) {
      return (
        <p>
          <a
            onClick={() => this.changeToEn()}
            className='decorless'
            style={(this.props.locale === 'en') ? { color: '#ffffff' } : null}
          >
            English
          </a> | <a
            onClick={() => this.changeToRu()}
            className='decorless'
            style={(this.props.locale === 'ru') ? { color: '#ffffff' } : null}
          >
            Русский
          </a>
        </p>
      );
    } else {
      return (
        <a
          onClick={() => this.toggleLocale()}
          // className='decorless'
        >
          {this.props.locale === 'en' ? 'RU' : 'EN'}
        </a>
      );
    }
  }
}

LocaleWidget.propTypes = {
  locale: PropTypes.string.isRequired,
  onChangeLanguage: PropTypes.func.isRequired
};

export default LocaleWidget;
