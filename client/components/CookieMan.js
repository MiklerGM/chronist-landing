import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

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
  }

  render() {
    if (this.state.haveSession) {
      return null;
    }
    return (
      <div className='cookie-message'>
        <div className='page--content'>
          <p>
            <FormattedHTMLMessage id='cookie.message' />
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
