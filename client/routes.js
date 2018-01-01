import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

if (process.env.WEBPACK) require('bootstrap/less/bootstrap.less'); // eslint-disable-line global-require

import Home from './components/Home';
import Blog from './components/Blog/Blog';
import NotFound from './components/ErrorPages/404';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Faq from './components/Faq/Faq';
import Privacy from './components/Privacy/Privacy';
import Modal from './components/Survey/Modal';
import Newsletter from './components/Newsletter';
import Legal from './components/Legal/Legal';

// import preview from './images/richpreview.png';

const Wrapper = () => (
  <div className='wrap'></div>
);

const AppRouter = () => (
  <div>
    <Wrapper />
    <Navigation />
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route path='/blog' component={Blog} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/about' component={About} />
        <Route path='/faq' component={Faq} />
        <Route path='/privacy' component={Privacy} />
        <Route path='/legal' component={Legal} />
        <Route path='/newsletter' component={Newsletter} />
        <Route path='/survey' component={Modal} />
        <Route render={NotFound} />
      </Switch>
      <Footer />
  </div>
);

export default AppRouter;
