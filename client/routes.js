import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Home from './components/Home';
import Blog from './components/Blog/Blog';
import NotFound from './components/ErrorPages/404';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import ContactUs from './components/ContactUs';
import Faq from './components/Faq/Faq';
import Privacy from './components/Privacy/Privacy';
import Modal from './components/Survey/Modal';
import Legal from './components/Legal/Legal';
// import About from './components/About';
// NEWSLETTER?

import './images/richpreview.png';

const Wrapper = () => (
  <div className='wrap' />
);

const AppRouter = ({ onChangeLanguage, locale }) => (
  <div>
    <Helmet
      htmlAttributes={{ lang: locale, amp: undefined, dir: 'ltr' }}
      title='Хронист'
      titleTemplate='Хронист - %s'
      defaultTitle='Хронист'
      meta={[
        { name: 'description', content: 'Интерактивная история на карте мира' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Хронист' },
        { property: 'og:description', content: 'Интерактивная история на карте мира' },
        { property: 'og:url', content: 'https://chronist.ru/' },
        { property: 'og:image', content: 'https://chronist.ru/richpreview.png' },
        { property: 'og:image:url', content: 'https://chronist.ru/richpreview.png' },
        { property: 'og:image:secure_url', content: 'https://chronist.ru/richpreview.png' }
      ]}
    />
    <Navigation onChangeLanguage={onChangeLanguage} locale={locale} />
    <Wrapper />
    <div className='wrapper'>
      <Switch>
        <Route exact path='/' render={() => <Home locale={locale} />} />
        <Route path='/faq' render={() => <Faq locale={locale} />} />
        <Route exact path='/survey' component={Modal} />
        <Route path='/blog' render={() => <Blog locale={locale} />} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/legal' component={Legal} />
        <Route path='/privacy' component={Privacy} />
        <Route render={NotFound} />
      </Switch>
    </div>
    <Footer onChangeLanguage={onChangeLanguage} locale={locale} />
  </div>
);

export default AppRouter;
