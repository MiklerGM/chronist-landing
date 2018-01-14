 import React from 'react';
import axios from 'axios';

const SocialButton = () => (
  <div className='form-group'>
    <a href='https://vk.com/chronist' alt='Вконтакте'>
      <button type='button' className='vk'>
        <i className='icon-vkontakte' aria-hidden='true' /> Вконтакте
      </button>
    </a>
  </div>
);

export default class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', visibile: false, success: false };
  }

  getGlyph() {
    return this.state.success ? 'fa icon-check ' : 'fa icon-cancel';
  }

  onSubmit() {
    e.preventDefault();
    const _this = this;
    axios.post('/email.php', `email=${this.state.email}`)
      .then(function (response) {
        _this.setState({ ..._this.state, email: '', visibile: true, success: true });
        console.log(response);
      })
      .catch(function (error) {
        _this.setState({ ..._this.state, visibile: true, success: false });
        console.log(error);
      });
  }

  render() {
    return (
      <div className='page--segment text-center bg-gray'>
        <div className='page--content'>
          <p>
            Чтобы быть в курсе наших обновлений - подпишитесь на рассылку или участвуйте в наших сообществах в соцсетях.
          </p>
          <form
            className='form-inline'
            action='email.php'
            onSubmit={(e) => this.onSubmit(e)}
          >
            <div className='form-group '>
              <div className='input-group col-centered'>
                <input
                  type='email'
                  value={this.state.email}
                  // className='form-control'
                  // className='red'
                  size='20'
                  placeholder='Ваш E-mail'
                  required
                  onChange={(e) => {
                    this.setState({ ...this.state, email: e.target.value });
                  }}
                />
                <div className='input-group-btn'>
                  <button type='submit' className='red'>Подписаться</button>
                </div>
              </div>
            </div>
            <SocialButton />
          </form>
          <span key='result' style={this.state.visibile ? {} : { display: 'none' }} className={this.getGlyph()}>{' '}{this.state.success ? 'Вы успешно подписались' : 'Произошла ошибка'}</span>
        </div>
      </div>
    );
  }
}
