import React from 'react';
import { FormattedMessage } from 'react-intl';
import axios from 'axios';

import { MailInput } from './Input';

const SocialButton = () => (
  <div className='social--button'>
    <a className='decorless' href='https://vk.com/chronist' alt='Вконтакте'>
      <button type='button' className='vk'>
        <i className='icon-vkontakte' aria-hidden='true' />
        <FormattedMessage
          id='home.subscribe.vk'
        />
      </button>
    </a>
  </div>
);

export default class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibile: false,
      success: false,
      data: {
        email: '',
      }
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const _this = this;
    axios.post('/shared/subscribe', `email=${this.state.data.email}`)
      .then((response) => {
        const success = response.status === 200;
        const wipe = success ? { email: '' } : {};
        _this.setState({ ..._this.state, ...wipe, visibile: true, success });
      })
      .catch((error) => {
        _this.setState({ ..._this.state, visibile: true, success: false });
        console.log(error);
      });
    return false;
  }

  getGlyph() {
    return this.state.success ? 'fa icon-check ' : 'fa icon-cancel';
  }

  handleInput(value) {
    this.setState({ data: value });
  }

  render() {
    return (
      <div className='page--segment text-center bg-gray'>
        <div className='page--content'>
          <p>
            <FormattedMessage
              id='home.subscribe.message'
            />
          </p>
          <div className='join-us'>
            <div >
              <form
                action='/shared/subscribe'
                method='POST'
                className='subscribe input-group'
                onSubmit={e => this.onSubmit(e)}
              >
                <MailInput
                  value={this.state.data.email}
                  name='email'
                  placeholder='contact.placeholder.email'
                  cb={e => this.handleInput(e)}
                />
                <button type='submit' className='red'>
                  <FormattedMessage
                    id='home.subscribe.button'
                  />
                </button>
              </form>
            </div>
            <SocialButton />
          </div>
          <div
            key='result'
            style={this.state.visibile ? {} : { display: 'none' }}
            className={this.getGlyph()}
          >
            {' '}{this.state.success
              ? <FormattedMessage id='home.subscribe.success' />
              : <FormattedMessage id='home.subscribe.fail' />}
          </div>
        </div>
      </div>
    );
  }
}
