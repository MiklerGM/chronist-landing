import React from 'react';
import {
  BrowserRouter as Router,
  browserHistory
} from 'react-router-dom';
import AppRouter from './routes';

if (process.env.WEBPACK) {
  // require('./styles/nav-router.less'); // eslint-disable-line global-require
  require('./fontello.less'); // eslint-disable-line global-require
  require('./App.less'); // eslint-disable-line global-require
}

const App = () => (
  <Router history={browserHistory}>
    <AppRouter />
  </Router>

);

// export default const App = () => (< />);
export default App;
