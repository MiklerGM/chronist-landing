import React from 'react';

// import '../styles/footer.less';
if (process.env.WEBPACK) require('../styles/footer.less'); // eslint-disable-line global-require


class Footer extends React.Component {
  render() {
    return (
      <footer id='footer' className='row'>
        <div className='bg-footer'>
          <p>Хронист 2017</p>
        </div>
        <ul>
          <li><a href="mailto:contact@chronist.ru">Email </a></li>
          <li><a href='https://vk.com/chronist'><span className="social fa icon-vkontakte" aria-hidden="true"></span></a></li>
        </ul>
      </footer>
    );
  }
}
export default Footer;
