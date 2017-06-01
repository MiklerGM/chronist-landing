import React from 'react';
import { Link } from 'react-router-dom';

// import '../styles/footer.less';
if (process.env.WEBPACK) require('../styles/footer.less'); // eslint-disable-line global-require

const Clear = () => (
  <div className='clear' />
);

class FooterDiv extends React.Component {
  render() {
    return (
      <footer id="footer" className='row'><div className='bg-footer'><div className='container'>

        <div className='left-part col-md-6 col-sm-6'>
          <p><span className='icon-copyright' /> 2017. Команда <a href='https://chronist.ru/about' className='social'> Хронист </a></p>
          <p>Художник - <a href='https://www.facebook.com/kotokhira' className='social'>Валерия Журавлёва</a></p>
        </div>
        <div className='right-part col-md-6 col-sm-6'>
          <div className='sns'>
            <a href='mailto:idea@chronist.ru'><span className='social fa icon-envelope-open' aria-hidden='true' /></a>
            <a href='https://vk.com/chronist'><span className='social fa icon-vkontakte' aria-hidden='true' /></a>
          </div>
          <p className='social'><Link to="/contact">Свяжитесь с нами</Link></p>
        </div>
      </div></div><hr /></footer>
    );
  }
}

const Footer = () => (
  <div>
    <Clear />
    <FooterDiv />
  </div>
);

export default Footer;
