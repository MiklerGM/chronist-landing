import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// const ContactUs = () => (
//   <div className='container'>
//     <h4 className='text-center article'>
//     Если у вас возникли проблемы, вопросы или предложения
//     по работе сайта — сообщите нам по электронной почте <a href='mailto:idea@chronist.ru'> idea@chronist.ru </a>.
//     </h4>
//     {/* или воспользуйтесь формой */}
//   </div>
// );

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibile: false,
      success: false,
      name: '',
      email: '',
      text: ''
    };
  }
  getGlyph() {
    return this.state.success ? 'fa icon-check ' : 'fa icon-cancel';
  }
  getSecret() {
    const pi = 314159;
    const ts = Math.floor(Date.now() / 1000);
    const arr = ts.toString().split('');
    const magic = arr.reduce((m, cur) => (Number(cur) === 0 ? m : m * cur), 1);
    const params = `p=${ts * pi}&m=${magic * this.state.text.length}`;
    return params;
  }

  render() {
    return (
      <div id='contact' className='page--segment'><div className='page--content'>
        <h1 id='pageTitle' className='text-center'> Связь с нами </h1>
        <h4 className='text-left article'>
        Нам приятно видеть, что вы всё ещё не покинули нас и проявляете интерес к нашему продукту.
        Вы можете написать нам если у вас возникли вопросы по работе сайта,
        проблемы с сервисом или просто так. Мы всегда рады сообщениям.
        Так же можно написать нам на электронную
        почту <a href='mailto:idea@chronist.ru'> idea@chronist.ru </a>.
        </h4>
        <div className='container'><form
          className='form-inline'
          action='contact.php'
          onSubmit={(e) => {
            e.preventDefault();
            const _this = this;
            axios.post('/contact.php', `${this.getSecret()}&email=${this.state.email}&name=${encodeURI(this.state.name)}&text=${encodeURI(this.state.text)}`)
              .then((response) => {
                const success = response.status === 200;
                const wipe = success ? { email: '', name: '', text: '' } : {};
                _this.setState({ ..._this.state, ...wipe, visibile: true, success });
              })
              .catch((error) => {
                _this.setState({ ..._this.state, visibile: true, success: false });
                console.log(error);
              });
          }}
        >
          <div>
            <div className='col-md-6 col-sm-6'>
              <input
                className='short-input'
                type='text'
                value={this.state.name}
                // size='40'
                placeholder='Имя'
                maxLength='20'
                onChange={(e) => {
                  this.setState({ ...this.state, name: e.target.value });
                }}
              />
            </div>
            <div className='col-md-6 col-sm-6'>
              <input
                className='short-input col-md-6 col-sm-6'
                type='email'
                value={this.state.email}
                // size='20'
                maxLength='100'
                placeholder='Электронная почта'
                onChange={(e) => {
                  this.setState({ ...this.state, email: e.target.value });
                }}
              />
            </div>
          </div>
          <div>
            <div className='col-md-12 col-sm-12'>
              <textarea
                className='long-input'
                type='text'
                value={this.state.text}
                rows='7'
                maxLength='2000'
                required
                // onInvalid={alert('Заполните это поле')}
                style={{ height: 200 }}
                placeholder='Ваше сообщение *'
                onChange={(e) => {
                  this.setState({ ...this.state, text: e.target.value });
                }}
              />
            </div>
          </div>
          <div>
            <div className='col-md-2 col-sm-2 text-left'>
              <button type='submit' className='btn btn-empty'>Отправить</button>
            </div>
          </div>
        </form></div>

        <div>
          <div className='center'>
            <p>Нажимая на кнопку, вы даете согласие на обработку своих персональных данных <br />

            <Link activeclassname='active' to="/privacy">Политика конфедициальности</Link>
            </p>
          </div>
        </div>

        <div><h4>
          <span key='result' style={this.state.visibile ? {} : { display: 'none' }} className={this.getGlyph()}>{' '}{this.state.success ? 'Ваше сообщение успешно отправлено' : 'Произошла ошибка'}<br /></span>
        </h4></div>

      </div></div>
    );
  }
}


export default ContactUs;
