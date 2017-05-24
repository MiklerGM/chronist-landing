import React from 'react';

// import '../styles/footer.less';
if (process.env.WEBPACK) require('../styles/footer.less'); // eslint-disable-line global-require


class Footer extends React.Component {
  render() {
    return (
      <footer id="footer" className='row'><div className='bg-footer'><div className='container'>

        <div className='left-part col-md-6 col-sm-6'>
          <p>Хронист 2017</p>
          <p>Иллюстрация предоставлены <a href='https://chronist.ru/about' className='social'>Лерой </a></p>
        </div>
        <div className='right-part col-md-6 col-sm-6'>
          <a href='mailto:idea@chronist.ru'><span className='social fa icon-envelope-open' aria-hidden='true' /></a>
          <a href='https://vk.com/chronist'><span className='social fa icon-vkontakte' aria-hidden='true' /></a>
        </div>
      </div></div><hr /></footer>
    );
  }
}

export default Footer;
