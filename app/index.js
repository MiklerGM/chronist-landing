import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/less/bootstrap.less';
import { YMInitializer } from 'react-yandex-metrika';
import ym from 'react-yandex-metrika';
// import {Helmet} from "react-helmet";

import './styles/nav-router.less';
import './favicon.ico';
import './styles/fontello.less';
import './index.html';

import Home from './components/Home';
import Blog from './components/Blog';

// ym.init([42857239]); <- Alice id
// ym.init([42866674]); <- Padavan id
const YmId = (process.env.NODE_ENV === 'production') ? [42857239, 42866674] : [42866674];

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      themeName: 'nav topnav',
      style: { float: 'right' },
    };
  }

  logPageView() {
    // console.log('=====YM=====>', location.pathname);
    // console.log(`YM ids is ${YmId}`);
    ym('hit', location.pathname);
    ym('userParams', { vip_status: false });
  }

  componentDidMount() {
    this.logPageView();
  }


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

    return (
      <Router onUpdate={() => this.logPageView()} >
        <div id="home" className="container-fluid">
          <YMInitializer
            accounts={YmId}
            options={{
              defer: true,
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true,
              trackHash: true
            }} />

          <ul className={this.state.themeName}>
            <li><Link to="/">Хронист</Link></li>
            <li><a href='https://demo.chronist.ru/'>Демо</a></li>

            <li style={this.state.style}><a href="#AppDescription">Блог</a></li>
            <li style={this.state.style}><a href="#what">О проекте </a></li>
            {(process.env.NODE_ENV === 'production') ? null : <li style={this.state.style}><Link to="/blog">Blog</Link></li> }
            <li className="icon"><button onClick={this.toggle}><i className='fa icon-menu' /></button></li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
        </div>
      </Router>
    );
  }
}

const Application = () => (
  <div className="application">
    <Hello />
  </div>
);

ReactDOM.render((
  <Application />
), document.getElementById('app'));
