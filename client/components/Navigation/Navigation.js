import React from 'react';
import {
  NavLink, withRouter
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import LocaleWidget from '../Footer/LocaleWidget';

if (process.env.WEBPACK) require('./nav-router.less');

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      nav: 'nav--list',
    };
  }

  toggle(e) {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    if (!this.state.isOpen) {
      this.state.nav = 'nav--list hidden';
    } else {
      this.state.nav = 'nav--list';
    }

    return (
      <div id="Navigation" className='row'>
        <div className="container-fluid">
          <nav>
            <ul className={this.state.nav}>
              <li className='nav--item'>
                <NavLink exact activeClassName='active' to="/"><FormattedMessage id='nav.main' /></NavLink>
              </li>
              <li className='nav--item'>
                <a href='https://demo.chronist.ru/'><FormattedMessage id='nav.map' /></a>
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
            <button className='icon' onClick={e => this.toggle(e)}> <i className='fa icon-menu' /></button>
          </nav>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  locale: PropTypes.string.isRequired,
  onChangeLanguage: PropTypes.func.isRequired
};


export default withRouter(Navigation);
