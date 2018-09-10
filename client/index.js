import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';


function renderApp(component) {
  const Application = component;
  if (process.env.NODE_ENV === 'development') {
    render(<Application />, document.body.appendChild(document.createElement('div')));
  } else {
    hydrate(<Application />, document.getElementById('app'));
  }
}

renderApp(App);

if (module.hot) {
  module.hot.accept(['./App'], () => {
    // saving script child
    const script = document.body.removeChild(document.body.children[0]);
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    } // wiping all children
    // returning back script field
    document.body.appendChild(script);

    // eslint-disable-next-line global-require
    const NextApp = require('./App').default;
    renderApp(NextApp);
  });
}
