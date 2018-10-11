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
            <FormattedMessage id='home.description' />
          </p>
          <a className='decorless' href='https://maps.chronist.ru/' onClick={() => this.handleClick()}>
            <button>
              <FormattedMessage id='home.description.button' />
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default JumpToMap;
