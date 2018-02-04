import React from 'react';
import PropTypes from 'prop-types';

class LocaleWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  changeToEn() {
    this.props.onChangeLanguage('en');
  }

  changeToRu() {
    this.props.onChangeLanguage('ru');
  }

  render() {
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
          Russian
        </a>
      </p>
    );
  }
}

LocaleWidget.PropTypes = {
  locale: PropTypes.string.isRequired,
  onChangeLanguage: PropTypes.func.isRequired
};

export default LocaleWidget;
