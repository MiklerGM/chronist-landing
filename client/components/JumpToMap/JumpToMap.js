import React from 'react';
import { FormattedMessage } from 'react-intl';
import ym from 'react-yandex-metrika';

class JumpToMap extends React.Component {
  handleClick() {
    ym('reachGoal', 'jumpToMap');
  }

  render() {
    return (
      <div className='page--segment'>
        <div className='page--content'>
          <p>
            <span><FormattedMessage id='home.description' /></span>
          </p>
          <a className='decorless' href='https://chronmaps.com/' onClick={() => this.handleClick()}>
            <button>
              <span><FormattedMessage id='home.description.button' /></span>
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default JumpToMap;
