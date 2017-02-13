import React from 'react';

export default class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', error: '' };
  }

  render() {
    return (
    <div id="Subscribe" className="bg-2 text-center">
    <p>Получайте информацию о ходе проекта и датах запуска.</p>
    <form className="form-inline" action="email.php" onSubmit={(e) => {
      e.preventDefault();
      axios.post('/email.php', `email=${this.state.email}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }}>
      <div className="form-group">
        <div className="input-group">
          <input type="email" value={this.state.email} className="form-control" size="20" placeholder="Ваш E-mail" required onChange={(e) => {
            this.setState({...this.state, email: e.target.value });
          }} />
          <div className="input-group-btn">
            <button type="submit" className="btn btn-danger">Подписаться</button>
          </div>
        </div>
      </div>
      <div className="form-group">
        <a href="https://vk.com/public139815700" alt="Вконтакте"><button type="button" className="btn btn-primary"> <i className="fa fa-vk" aria-hidden="true"></i> Вконтакте </button></a>
      </div>
    </form>

    </div>
  );
  }
}
