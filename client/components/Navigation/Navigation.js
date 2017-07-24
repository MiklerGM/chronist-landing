import React from 'react';
import {
  NavLink,
} from 'react-router-dom';
import { YMInitializer } from 'react-yandex-metrika';

if (process.env.WEBPACK) require('./nav-router.less');

const YmId = (process.env.NODE_ENV === 'production') ? [42857239, 42866674] : [42866674];
// ym.init([42857239]); <- Alice id
// ym.init([42866674]); <- Padavan id

// const logPageView = () => {
//   console.log('logPageView triggered');
//   console.log('=====YM=====>', location.pathname);
//   ym('hit', 'test');
//   ym('userParams', { vip_status: false });
//   return null;
// };

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      themeName: 'nav topnav',
      style: { float: 'right' },
    };
  }

  // componentDidMount() {
  //   logPageView();
  // }

  toggle(e) {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    if (!this.state.isOpen) {
      this.state.themeName = 'topnav nav';
      this.state.style = { float: 'right' };
    } else {
      this.state.themeName = 'topnav nav responsive';
      this.state.style = { float: 'none' };
    }

    //
    return (
      <div id="Navigation" className='row' ><div className="container-fluid">
        <YMInitializer
          accounts={YmId}
          version="2"
          options={{
            clickmap: true,
            // trackLinks: true,
            // accurateTrackBounce: true,
            // webvisor: true,
            // trackHash: true,
          }}
        />
        <ul className={this.state.themeName}>
          <li><NavLink exact activeClassName='active' to="/">Хронист</NavLink></li>
          <li><a href='https://demo.chronist.ru/'>Демо</a></li>
          <li style={this.state.style}><NavLink activeClassName='active' to="/faq">FAQ</NavLink></li>
          <li style={this.state.style}><a href="#what">О проекте </a></li>
          <li style={this.state.style}><NavLink activeClassName='active' to="/blog">Блог</NavLink></li>
          <li className="icon"><button onClick={this.toggle}><i className='fa icon-menu' /></button></li>
        </ul>
      </div></div>
    );
  }
}

export default Navigation;
