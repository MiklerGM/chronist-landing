import React from 'react';
import {
  BrowserRouter as Router,
  browserHistory
} from 'react-router-dom';
import AppRouter from './routes';
import { YMInitializer } from 'react-yandex-metrika';

const YmId = (process.env.NODE_ENV === 'production') ? [42857239, 42866674] : [42866674];

if (process.env.WEBPACK) {
  // require('./styles/nav-router.less'); // eslint-disable-line global-require
  require('./fontello.less'); // eslint-disable-line global-require
  require('./App.less'); // eslint-disable-line global-require
}

const App = () => (
  <Router history={browserHistory}>
    <YMInitializer accounts={YmId} options={{ defer: true }} >
      <AppRouter />
    </YMInitializer>
  </Router>
);

// export default const App = () => (< />);
export default App;
