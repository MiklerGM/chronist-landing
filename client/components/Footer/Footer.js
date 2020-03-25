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
          <span><FormattedMessage id='footer.privacy' /></span>
        </Link>
      </p>
      <p>
        <Link to='/legal'>
          <span><FormattedMessage id='footer.tos' /></span>
        </Link>
      </p>
      <p className='social'>
        <Link to="/contact">
          <span><FormattedMessage id='footer.contact' /></span>
        </Link>
      </p>
      <p className='social'>
        <Link to="/license">
          <span><FormattedMessage id='footer.license' /></span>
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
