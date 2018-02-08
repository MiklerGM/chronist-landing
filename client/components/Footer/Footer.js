import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import LocaleWidget from './LocaleWidget';

if (process.env.WEBPACK) require('./footer.less'); // eslint-disable-line global-require

const Clear = () => (
  <div className='clear' />
);

const Footer = ({ onChangeLanguage, locale }) => (
  <footer id="footer"><div className='page--content'>
    {/*
    <p><a className='social'><span className='icon-copyright' />
      Команда Хронист
    </a></p>
  */}
    <p><Link to='privacy'>
      <FormattedMessage
        id='footer.privacy'
        defaultMessage={`Default message`}
      />
    </Link></p>
    <p><Link to='legal'>
      <FormattedMessage
        id='footer.tos'
        defaultMessage={`Default message`}
      />
    </Link></p>
    <p className='social'><Link to="contact">
      <FormattedMessage
        id='footer.contact'
        defaultMessage={`Default message`}
      />
    </Link></p>
    <LocaleWidget onChangeLanguage={onChangeLanguage} locale={locale} />
  </div></footer>
);

// const FooterDiv = withRouter(FooterDivOld);


// const Footer = ({ onChangeLanguage, locale }) => (
//   <div>
//     <Clear />
//     <FooterDiv onChangeLanguage={onChangeLanguage} locale={locale} />
//   </div>
// );

export default withRouter(Footer);
