import React from 'react';
import { FormattedMessage } from 'react-intl';

const JumpToMap = () => (
  <div className='page--segment'>
    <div className='page--content'>
      <p>
        <FormattedMessage
          id='home.description'
        />
      </p>
      <a className='decorless' href='https://maps.chronist.ru/'><button>
        <FormattedMessage
          id='home.description.button'
        />
      </button></a>
    </div>
  </div>
);

export default JumpToMap;
