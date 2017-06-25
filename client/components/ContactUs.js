import React from 'react';
import axios from 'axios';

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
      <div id='contact' className='container'><div className='bg-what'>
        <h1 id='pageTitle' className='text-center'> Связь с нами </h1>
        <h4 className='text-center article'>
        Нам приятно видеть, что вы всё ещё не покинули нас и проявляете интерес к нашему продукту.
        Вы можете написать нам если у вас возникли вопросы по работе сайта,
        проблемы с сервисом или просто так. Мы всегда рады сообщениям.
        </h4>
        <div className='container'><form
          className='form-inline'
          action='contact.php'
          onSubmit={(e) => {
            e.preventDefault();
            console.log(`submit: name:${this.state.name}, email: ${this.state.email}, text: ${this.state.text}`);
            const _this = this;
            axios.post('/contact.php', `${this.getSecret()}&email=${this.state.email}&name=${encode(this.state.name)}&text=${this.state.text}`)
              .then((response) => {
                const success = response.status === 200;
                const wipe = success ? { email: '', name: '', text: '' } : {};
                _this.setState({ ..._this.state, ...wipe, visibile: true, success });
                console.log(response);
              })
              .catch((error) => {
                _this.setState({ ..._this.state, visibile: true, success: false });
                console.log(error);
              });
          }}
        >
          <row>
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
          </row>
          <row>
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
          </row>
          <row>
            <div className='col-md-2 col-sm-2 text-left'>
              <button type='submit' className='btn btn-empty'>Отправить</button>
            </div>
          </row>
        </form></div>

        <row><h4>
          <span key='result' style={this.state.visibile ? {} : { display: 'none' }} className={this.getGlyph()}>{' '}{this.state.success ? 'Ваше сообщение успешно отправлено' : 'Произошла ошибка'}<br /></span>
        Так же можно написать нам на электронную почту <a href='mailto:idea@chronist.ru'> idea@chronist.ru </a>.
        </h4></row>

      </div></div>
    );
  }
}


export default ContactUs;
