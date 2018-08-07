import React from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import NotFound from './NotFound';

const Page1 = () => (
  <div>
    <p>
      Here’s a newsletter, delivered via email,
      that we intend to put out once a quarter or so.
      It’ll have news, links to new stuff, maybe a tip or two,
      and perhaps some sneak peeks at new features.
      Go ahead and sign up. Don’t worry, your email address is safe with us.
      Promise.
    </p>
    <MailForm destination='Подписаться' />
  </div>
);
const Page2 = () => (
  <div>
    Для того чтоб отписаться от почтовой рассылки, укажите почту.
    <MailForm destination='Отписаться' />
  </div>
);

class MailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', visibile: false, success: false };
  }

  getGlyph() {
    return this.state.success ? 'fa icon-check ' : 'fa icon-cancel';
  }

  submitForm(e) {
    e.preventDefault();)
    // console.log('submitForm trigger');
    // const _this = this;
    // axios.post('/email.php', `email=${this.state.email}`)
    //   .then(function (response) {
    //     _this.setState({ ..._this.state, email: '', visibile: true, success: true });
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     _this.setState({ ..._this.state, visibile: true, success: false });
    //     console.log(error);
    //   });
  }

  render() {
    return (
      <div id='Subscribe' className='row'><div className='bg-2'>
        <form
          className='form-inline'
          action='email.php'
          onSubmit={(e) => this.submitForm(e)}
        >
          <div className='form-group '>
            <div className='input-group col-centered'>
              <input
                type='email'
                value={this.state.email}
                className='form-control'
                size='20'
                placeholder='Ваш E-mail'
                required
                onChange={(e) => {
                  this.setState({ ...this.state, email: e.target.value });
                }}
              />
              <div className='input-group-btn'>
                <button type='submit' className='btn btn-danger'>{this.props.destination}</button>
              </div>
            </div>
          </div>
        </form>
        <span key='result' style={this.state.visibile ? {} : { display: 'none' }} className={this.getGlyph()}>{' '}{this.state.success ? 'Вы успешно подписались' : 'Произошла ошибка'}</span>
      </div></div>
    );
  }
}

const Newsletter = () => (
  <div id='contact' className='container'><div className='bg-what'>
    <h1 id='pageTitle' className='text-center'> Новостная рассылка </h1>
    <div className='tabs'>
      <NavLink to='/newsletter/subscribe' activeClassName="active"><h2> Подписаться </h2></NavLink>
      <NavLink to='/newsletter/unsubscribe' activeClassName="active"><h2> Отписаться </h2></NavLink>
    </div>
    <Switch>
      <Redirect exact from='/newsletter' to='/newsletter/subscribe' />
      <Route path='/newsletter/subscribe' render={Page1} />
      <Route path='/newsletter/unsubscribe' render={Page2} />
      <Route render={NotFound} />
    </Switch>
  </div></div>
);

export default Newsletter;
