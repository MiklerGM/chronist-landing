import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

import Subscribe from '../components/Subscribe';
import AppDescription from '../components/AppDescription/AppDescription';
import Team from '../components/Company/Team';
import Title from '../components/Title/Title';
import JumpToMap from '../components/JumpToMap/JumpToMap';

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
    const { default: Features } = await import(/* webpackChunkName: "features" */ '../components/Timeline/Features');
    this.setState({ lazyFeatures: Features });
  }

  async loadArticles() {
    const { default: ArticleGallery } = await import(/* webpackChunkName: "gallery" */ '../components/Articles/ArticleGallery');
    this.setState({ lazyArticles: ArticleGallery });
  }

  render() {
    const Features = this.state.lazyFeatures;
    const ArticleGallery = this.state.lazyArticles;

    return (
      <div>
        <Title locale={this.props.locale} />
        <JumpToMap />
        {ArticleGallery
          ? <ArticleGallery locale={this.props.locale} />
          : <div />
        }
        {Features
          ? <Features locale={this.props.locale} />
          : <div />
        }
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

export default Home;
