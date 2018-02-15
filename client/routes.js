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
import Newsletter from './components/Newsletter';
import Legal from './components/Legal/Legal';
// import About from './components/About';

if (process.env.WEBPACK) require('bootstrap/less/bootstrap.less'); // eslint-disable-line global-require

const Wrapper = () => (
  <div className='wrap' />
);


class AppRouter extends React.Component {
  render() {
    // const locale = 'en';
    // const onChangeLanguage = () => console.log('lol dummy');
    return(
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
            { property: 'og:url', content: 'https://chronist.ru/' },
            { property: 'og:image', content: 'https://chronist.ru/richpreview.png' },
            { property: 'og:image:url', content: 'https://chronist.ru/richpreview.png' },
            { property: 'og:image:secure_url', content: 'https://chronist.ru/richpreview.png' }
          ]}
        />
        <Navigation onChangeLanguage={this.props.onChangeLanguage} locale={this.props.locale} />
        <Wrapper />
        <div className='wrapper'>
          <Switch>
        {/*
            <Route path='/about' component={About} />
        */}
            <Route exact path='/' render={() => <Home locale={this.props.locale} />} />
            <Route path='/faq' render={() => <Faq locale={this.props.locale} />} />
            <Route exact path='/survey' component={Modal} />
            <Route path='/blog' render={() => <Blog locale={this.props.locale} />} />
            <Route path='/newsletter' component={Newsletter} />
            <Route path='/contact' component={ContactUs} />
            <Route path='/legal' component={Legal} />
            <Route path='/privacy' component={Privacy} />
            <Route render={NotFound} />
          </Switch>
        </div>
        <Footer onChangeLanguage={this.props.onChangeLanguage} locale={this.props.locale} />
      </div>
    );
  }
}

export default AppRouter;
