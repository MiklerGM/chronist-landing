import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { FormattedMessage } from 'react-intl';

import Subscribe from './Subscribe';
import AppDescription from './AppDescription/AppDescription';
import Team from './Company/Team';

const TitleImageRu = require('../images/logo-grey-ru.svg');
const TitleImageEn = require('../images/logo-grey-en.svg');

const Title = ({ locale }) => {
  let TitleImage = {};
  if (locale === 'ru') {
    TitleImage = TitleImageRu;
  } else {
    TitleImage = TitleImageEn;
  }
  return (
    <div id="title">
      <div className='text-center'>
        <img src={TitleImage} draggable="false" alt='Chronist logo' />
        <h4>
          <FormattedMessage
            id='home.title'
          />
        </h4>
      </div>
    </div>
  );
};

const JumpToMap = () => (
  <div className='page--segment'>
    <div className='page--content'>
      <p>
        <FormattedMessage
          id='home.description'
        />
      </p>
      <a className='' href='https://demo.chronist.ru/'><button className='main'>
        <FormattedMessage
          id='home.description.button'
        />
      </button></a>
    </div>
  </div>
);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lazyFeatures: null,
      lazyArticles: null
    };
  }

  componentDidMount = async () => {
    await this.loadFeatures();
    await this.loadArticles();
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  async loadFeatures() {
    const { default: Features } = await import(/* webpackChunkName: "features" */ './Timeline/Features');
    this.setState({ lazyFeatures: Features });
  }

  async loadArticles() {
    const { ArticleGallery } = await import(/* webpackChunkName: "features" */ './Blog/Blog');
    this.setState({ lazyArticles: ArticleGallery });
  }

  render() {
    const Features = this.state.lazyFeatures;
    const ArticleGallery = this.state.lazyArticles;

    return (
      <div className="app" >
        <Title locale={this.props.locale} />
        <JumpToMap />
        {ArticleGallery ? (
          <ArticleGallery locale={this.props.locale} />
          ) : (
            <div />
        )}
        {Features ? (
          <Features locale={this.props.locale} />
          ) : (
            <div />
        )}
        <Subscribe />
        <AppDescription />
        <Team locale={this.props.locale} />
      </div>
    );
  }
}

Home.propTypes = {
  locale: PropTypes.string.isRequired
};

Title.propTypes = {
  locale: PropTypes.string.isRequired
};

export default Home;
