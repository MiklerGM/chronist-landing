import React from 'react';
import { FormattedMessage } from 'react-intl';
import ym from 'react-yandex-metrika';

class CookieManager extends React.Component {
  state = {
    haveSession: false,
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.setState({ haveSession: true });
    }
  }

  handleClick() {
    localStorage.setItem('token', true);
    this.setState({ haveSession: true });
    ym('reachGoal', 'cookieAgree');
  }

  render() {
    if (this.state.haveSession) {
      return null;
    }
    return (
      <div className='cookie-message'>
        <div className='page--content'>
          <p>
            <FormattedMessage
              id='cookie.message'
              values={{
                ya: (...chunks) => (
                  <a href="https://yandex.ru/support/metrika/general/notification.html">
                    {chunks}
                  </a>
                ),
                goo: (...chunks) => (
                  <a href="https://policies.google.com/technologies/partner-sites">
                    {chunks}
                  </a>
                ),
              }}
            />
          </p>
          <button style={{ backgroundColor: '#fafafa', color: 'black' }} onClick={() => this.handleClick()}>
            <FormattedMessage id='cookie.agree' />
          </button>
        </div>
      </div>
    );
  }
}

export default CookieManager;
