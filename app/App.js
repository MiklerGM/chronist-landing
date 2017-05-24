import React from 'react';
import {
  BrowserRouter as Router,
  browserHistory
} from 'react-router-dom';
// import {Helmet} from "react-helmet";
import AppRouter from './routes';

require('bootstrap/less/bootstrap.less');

// import 'bootstrap/less/bootstrap.less';
// import './styles/nav-router.less';
// import './styles/fontello.less';
if (process.env.WEBPACK) {
  require('./styles/nav-router.less'); // eslint-disable-line global-require
  require('./styles/fontello.less'); // eslint-disable-line global-require
  require('bootstrap/less/bootstrap.less'); // eslint-disable-line global-require
}

const App = () => (
  <Router history={browserHistory}>
    <AppRouter />
  </Router>

);

// export default const App = () => (< />);
export default App;
