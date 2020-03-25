import React from 'react';
import { FormattedMessage } from 'react-intl';

import './AppDescription.less';
import article from './AppDescription.json';

class AppDescription extends React.Component {
  state = {
    show: false
  };

  toggle(e) {
    e.preventDefault();
    // this.setState({ show: !this.state.show });
    this.setState((state) => ({ show: !state.show }));
  }

  render() {
    return (
      <div className='page--segment'>
        <div className='page--content'>
          <div className="article--item">
            <h2>
              <span><FormattedMessage id='press.title' /></span>
            </h2>
            <p>
              {article.author}
              <br />
              {article.position}
            </p>
            <p>
              {article.article}
            </p>
            {this.state.show ? (
              <div><p>{article.more}</p></div>
            ) : null}
            <button onClick={(e) => this.toggle(e)} className="pull-right readmore decorless">
              <span>
                <FormattedMessage id={`${this.state.show ? 'press.less' : 'press.more'}`} />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDescription;
