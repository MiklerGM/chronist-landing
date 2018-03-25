import React from 'react';
import {
  NavLink, withRouter
} from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import LocaleWidget from '../Footer/LocaleWidget';

if (process.env.WEBPACK) require('./nav-router.less');

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      themeName: 'nav topnav',
      style: { float: 'right' },
      nav: 'nav--list',
    };
  }

  toggle(e) {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    if (!this.state.isOpen) {
      this.state.themeName = 'topnav nav';
      this.state.style = { float: 'right' };
      this.state.nav = 'nav--list hidden';
    } else {
      this.state.themeName = 'topnav nav responsive';
      this.state.style = { float: 'none' };
      this.state.nav = 'nav--list';
    }

    return (
      <div id="Navigation" className='row'>
      {/*
        <div className="container-fluid">
          <ul className={this.state.themeName}>
            <li><NavLink exact activeClassName='active' to="/">
              <FormattedMessage
                id='nav.main'
              />
            </NavLink></li>
            <li><a href='https://demo.chronist.ru/'>
              <FormattedMessage
                id='nav.map'
              />
            </a></li>
            <li style={this.state.style}>
              <LocaleWidget
                onChangeLanguage={this.props.onChangeLanguage}
                locale={this.props.locale}
                min={true}
              />
            </li>
            <li style={this.state.style}><NavLink activeClassName='active' to="/blog">
              <FormattedMessage
                id='nav.blog'
              />
            </NavLink></li>
            <li style={this.state.style}><a href="https://vk.com/chronist"> VK </a></li>
            <li style={this.state.style}><NavLink activeClassName='active' to="/faq">FAQ</NavLink></li>
            <li className="icon"><button onClick={this.toggle}><i className='fa icon-menu' /></button></li>
          </ul>
        </div>
      */}
        <div className="container-fluid">
          <nav>
            <ul className={this.state.nav}>
              <li className='nav--item'>
                <NavLink exact activeClassName='active' to="/"><FormattedMessage id='nav.main'/></NavLink>
              </li>
              <li className='nav--item'>
                <a href='https://demo.chronist.ru/'><FormattedMessage id='nav.map'/></a>
              </li>
              <li className='nav--item'>
                <LocaleWidget
                  onChangeLanguage={this.props.onChangeLanguage}
                  locale={this.props.locale}
                  min={true}
                />
              </li>
              <li className='nav--item'>
                <NavLink activeClassName='active' to="/blog">
                  <FormattedMessage
                    id='nav.blog'
                  />
                </NavLink>
              </li>
              <li className='nav--item'>
                <a href="https://vk.com/chronist"> VK </a>
              </li>
              <li className='nav--item'>
                <NavLink activeClassName='active' to="/faq">FAQ</NavLink>
              </li>
            </ul>
            <button className='icon' onClick={this.toggle}> <i className='fa icon-menu' /> </button>
          </nav>
        </div>
      </div>
    );
  }
}

export default withRouter(Navigation);
