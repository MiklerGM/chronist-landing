import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import { TextInput, TextareaInput, MailInput } from './Input';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibile: false,
      success: false,
      data: {
        title: '',
        email: '',
        text: '',
      }
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const _this = this;
    axios.post('/shared/contact', `${this.getSecret()}&email=${this.state.data.email}&title=${encodeURI(this.state.data.title)}&text=${encodeURI(this.state.data.text)}`)
      .then((response) => {
        const success = response.status === 200;
        const wipe = success ? { email: '', title: '', text: '' } : {};
        _this.setState({ ..._this.state, ...wipe, visibile: true, success });
      })
      .catch((error) => {
        _this.setState({ ..._this.state, visibile: true, success: false });
        console.log(error);
      });
    return false;
  }

  getSecret() {
    const pi = 314159;
    const ts = Math.floor(Date.now() / 1000);
    const arr = ts.toString().split('');
    const magic = arr.reduce((m, cur) => (Number(cur) === 0 ? m : m * cur), 1);
    const params = `p=${ts * pi}&m=${magic * this.state.data.text.length}`;
    return params;
  }

  getGlyph() {
    return this.state.success ? 'fa icon-check ' : 'fa icon-cancel';
  }

  handleInput(value) {
    this.setState({ data: { ...this.state.data, ...value } });
  }


  render() {
    return (
      <div id='contact' className='page--segment'>
        <div className='page--content'>
          <h1 id='pageTitle' className='text-center'>
            <FormattedMessage
              id='contact.title'
            />
          </h1>
          <h4 className='text-left article'>
            <FormattedHTMLMessage
              id='contact.message'
            />
          </h4>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              justifyContent: 'center',
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            <form
              method='POST'
              action='/shared/contact'
              onSubmit={e => this.onSubmit(e)}
            >
              <TextInput
                value={this.state.data.title}
                placeholder='contact.placeholder.title'
                name='title'
                cb={e => this.handleInput(e)}
              />
              <MailInput
                value={this.state.data.email}
                name='email'
                placeholder='contact.placeholder.email'
                cb={e => this.handleInput(e)}
              />
              <TextareaInput
                value={this.state.data.text}
                name='text'
                placeholder='contact.placeholder.message'
                cb={e => this.handleInput(e)}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'left' }}>
                <button type='submit'>Отправить</button>
              </div>
              <div
                key='result'
                style={this.state.visibile ? {} : { display: 'none' }}
                className={this.getGlyph()}
              >
                {this.state.success
                  ? <FormattedMessage id='form.success' />
                  : <FormattedMessage id='form.failure' />
                }
              </div>
            </form>
          </div>
          <div className='center'>
            <p>
              <FormattedMessage
                id='contact.privacy'
              />
              <Link activeclassname='active' to="/privacy">
                <FormattedMessage
                  id='contact.privacy.link'
                />
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}


export default ContactUs;
