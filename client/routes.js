import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

if (process.env.WEBPACK) require('bootstrap/less/bootstrap.less'); // eslint-disable-line global-require

import Home from './components/Home';
import Blog from './components/Blog';
import NotFound from './components/NotFound';
import Footer from './components/Footer_DEPRICATED';
import Navigation from './components/Navigation';

import preview from './images/richpreview.png';

const AppRouter = () => (
  <div>
    <Helmet
      htmlAttributes={{ 'lang': 'ru', 'amp': undefined }} // amp takes no value
      title='Хронист'
      titleTemplate='Хронист - %s'
      defaultTitle='Хронист'
      // base={{ 'target': '_blank', 'href': 'http://chronist.ru/' }}
      meta={[
        { name: 'description', content: 'Интерактивная история на карте мира' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Хронист' },
        { property: 'og:description', content: 'Интерактивная история на карте мира' },
        { property: 'og:image', content: 'chronist.ru/richpreview.png' }
      ]}
    />
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
