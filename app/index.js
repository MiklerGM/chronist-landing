import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/less/bootstrap.less';
import ym from 'react-yandex-metrika';


import './styles/style.less';
import './favicon.ico';
import './styles/fontello.less';
import './index.html';

import Home from './components/Home';
import Blog from './components/Blog';

if (process.env.NODE_ENV === 'production') {
  ym.init([42866674]);
}


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

  componentDidMount() {
    ym('hit', '/');
    // console.log('ym fired');
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
      <Router onUpdate={pageView} >
        <div id="home" className="container-fluid">
          <ul className={this.state.themeName}>
            <li><Link to="/">Хронист</Link></li>
            <li style={this.state.style}><a href="#AppDescription">Блог</a></li>
            <li style={this.state.style}><a href="#what">О проекте </a></li>
            {/* <li style={this.state.style}><Link to="/blog">Blog</Link></li> */}
            <li className="icon"><button onClick={this.toggle}><i className='fa icon-menu' /></button></li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render((
  <Hello />
), document.getElementById('app'));
