import React from 'react';
import { hydrate, render } from 'react-dom';

import App from './App';

if (process.env.NODE_ENV === 'development') {
  render(<App />, document.getElementById('app'));
} else {
  hydrate(<App />, document.getElementById('app'));
}

module.hot.accept();
