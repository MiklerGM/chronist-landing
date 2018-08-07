import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';


function renderApp(component) {
  const Application = component;
  (process.env.NODE_ENV === 'development') ?
    render(<App/>, document.body.appendChild(document.createElement('div'))) :
    hydrate(<App />, document.getElementById('app'));
}

renderApp(App);

if (module.hot) {
  module.hot.accept(['./App'], () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./App').default;
    renderApp(NextApp);
  });
}
