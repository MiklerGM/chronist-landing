import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import LocaleWidget from '../Footer/LocaleWidget';

import './Navigation.less';

class Navigation extends React.Component {
  state = {
    isOpen: false,
  }

  toggle(e) {
    e.preventDefault();
    this.setState((state) => ({ isOpen: !state.isOpen }));
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <nav>
            <ul className={this.state.isOpen ? 'hidden' : ''}>
              <li>
                <NavLink exact activeClassName='active' to="/">
                  <span><FormattedMessage id='nav.main' /></span>
                </NavLink>
              </li>
              <li>
                <a href='https://chronmaps.com/'>
                  <span><FormattedMessage id='nav.map' /></span>
                </a>
              </li>
              <li>
                <LocaleWidget
                  onChangeLanguage={this.props.onChangeLanguage}
                  min
                  locale={this.props.locale}
                />
              </li>
              <li>
                <NavLink activeClassName='active' to="/blog">
                  <span><FormattedMessage id='nav.blog' /></span>
                </NavLink>
              </li>
              <li>
                <a href="https://vk.com/chronist"> VK </a>
              </li>
              <li>
                <NavLink activeClassName='active' to="/faq">FAQ</NavLink>
              </li>
            </ul>
            <button className='icon' onClick={(e) => this.toggle(e)}>
              <i className='fa icon-menu' />
            </button>
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

export default Navigation;
