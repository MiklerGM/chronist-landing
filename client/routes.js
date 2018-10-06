import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

// pages
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Privacy from './pages/Privacy';
import Legal from './pages/Legal';
import Faq from './pages/Faq';
import NotFound from './pages/ErrorPages/404';
import Blog from './pages/Blog';
import ArticlePage from './pages/ArticlePage';
// import About from './components/About';

// components
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import CookieManager from './components/CookieMan';
import Modal from './components/Survey/Modal';

import { urls } from './articles/blogData';

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
        {/*
          <Route path='/blog' render={() => <Blog locale={locale} />} />
        */}
        <Route exact path='/blog' render={() => <Blog locale={locale} />} />
        {urls.map(url =>
          <Route
            key={`/blog/${url}`}
            path={`/blog/${url}`}
            render={() => <ArticlePage url={url} locale={locale} />}
          />
        )}
        <Route path='/contact' component={ContactUs} />
        <Route path='/legal' component={Legal} />
        <Route path='/privacy' component={Privacy} />
        <Route render={NotFound} />
      </Switch>
    </div>
    <Footer onChangeLanguage={onChangeLanguage} locale={locale} />
    <CookieManager />
  </div>
);

export default AppRouter;
