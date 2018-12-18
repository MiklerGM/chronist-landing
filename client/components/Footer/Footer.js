import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import LocaleWidget from './LocaleWidget';
import './footer.less';

const Footer = ({ onChangeLanguage, locale }) => (
  <footer className='layer-4'>
    <div className='page--content'>
      <p>
        <Link to='/privacy'>
          <FormattedMessage id='footer.privacy' />
        </Link>
      </p>
      <p>
        <Link to='/legal'>
          <FormattedMessage id='footer.tos' />
        </Link>
      </p>
      <p className='social'>
        <Link to="/contact">
          <FormattedMessage id='footer.contact' />
        </Link>
      </p>
      <p className='social'>
        <Link to="/license">
          <FormattedMessage id='footer.license' />
        </Link>
      </p>
      <LocaleWidget onChangeLanguage={onChangeLanguage} locale={locale} />
    </div>
  </footer>
);

Footer.propTypes = {
  onChangeLanguage: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired
};

export default Footer;
