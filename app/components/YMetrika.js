import React from 'react';

import { Initializer as YM } from 'react-yandex-metrika';
import ym from 'react-yandex-metrika';


ym.init([42866674]);

class YMetrika extends React.Component {
  constructor() {
    super();
  }

    componentDidMount() {
      // Initializing tracking ID created from YM
      // ym.init([42857239]);

      // This just needs to be called once to grab stats
      ym('hit', '/');
    }

  render() {
    return(
      <YM />
     );
  }
}

export default YMetrika;


