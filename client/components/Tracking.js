import React from 'react';
import ym from 'react-yandex-metrika';

class Tracking extends React.Component {
  componentDidMount() {
    ym('hit', location.pathname);
  }

  render() {
    return null;
  }
}

export default Tracking;

