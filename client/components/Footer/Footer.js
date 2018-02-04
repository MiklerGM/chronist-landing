import React from 'react';
import { Link } from 'react-router-dom';

import LocaleWidget from './LocaleWidget';

if (process.env.WEBPACK) require('./footer.less'); // eslint-disable-line global-require

const Clear = () => (
  <div className='clear' />
);

const FooterDiv = ({ onChangeLanguage, locale }) => (
  <footer id="footer"><div className='page--content'>
    <p><a href='https://chronist.ru/about' className='social'><span className='icon-copyright' /> Команда Хронист </a></p>
    <p><Link to='/privacy'> Политика конфиденциальности</Link></p>
    <p><Link to='/legal'> Правила пользования сервисом </Link></p>
    <p className='social'><Link to="/contact">Свяжитесь с нами</Link></p>
    <LocaleWidget onChangeLanguage={onChangeLanguage} locale={locale} />
  </div></footer>
);


const Footer = ({ onChangeLanguage, locale }) => (
  <div>
    <Clear />
    <FooterDiv onChangeLanguage={onChangeLanguage} locale={locale} />
  </div>
);

export default Footer;
