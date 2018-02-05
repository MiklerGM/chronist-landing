import React from 'react';
import ReactGA from 'react-ga';
import { FormattedMessage } from 'react-intl';

import Subscribe from './Subscribe';
import AppDescription from './AppDescription/AppDescription';
import { ArticleGallery } from './Blog/Blog';
import Team from './Company/Team';
import Features from './Timeline/Features';

const TitleImage = require('../images/title-white.png');

class Title extends React.Component {
  render() {
    return (
      <div id="title">
        <div className='text-center'>
          <img src={TitleImage} />
          <h4>
              <FormattedMessage
                id='home.title'
              />
          </h4>
        </div>
      </div>
    );
  }
}

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
      lazy: null,
    };
  }

  async LoadFeatures() {
    const { default : Features } = await import(/* webpackChunkName: "features" */ './Timeline/Features');
    this.setState({ lazy: Features });
  }

  componentDidMount = async () => {
    await this.LoadFeatures();
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    const Features = this.state.lazy;

    return (
      <div className="app" >
        <Title />
        <JumpToMap />
        {/*
        <What />
        <Tracking />
        <Timeline />
        <Features />
        */}
        <ArticleGallery />
        {Features ? (
          <Features locale={this.props.locale} />
          ) : (
            <div />
        )}
        <Subscribe />
        <AppDescription />
        <Team locale={this.props.locale}/>
      </div>
    );
  }
}

export default Home;
