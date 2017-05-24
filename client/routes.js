import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

if (process.env.WEBPACK) require('bootstrap/less/bootstrap.less'); // eslint-disable-line global-require

import Home from './components/Home';
import Blog from './components/Blog';
import NotFound from './components/NotFound';
import Footer from './components/Footer_DEPRICATED';
import Navigation from './components/Navigation';

const AppRouter = () => (
  <div>
    <Navigation />
    <Route path="/" />
    <Switch>
      <Route exact path='/' render={() => <Home />} />
      <Route path='/blog' component={Blog} />
      <Route render={NotFound} />
    </Switch>
    <Footer />
  </div>
);

export default AppRouter;
