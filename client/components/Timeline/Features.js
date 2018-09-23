import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import featureListRU from './TimelineDataRU';
import featureListEN from './TimelineDataEN';

if (process.env.WEBPACK) require('./Features.less');

class Feature extends React.Component {
  render() {
    return (
      <div
        onClick={() => this.props.change(this.props.data.id)}
        onMouseOver={() => this.props.change(this.props.data.id)}
        className='feature__img'
      >
        <img
          src={this.props.data.img}
          alt={this.props.data.name}
          className={`img-responsive img-feature ${this.props.data.inactive ? 'inactive' : ''}`}
        />
      </div>
    );
  }
}

const Preview = ({ id, featureList }) => (
  <div className='feature__preview'>
    <ReactCSSTransitionGroup
      className="feature__map"
      component="div"
      transitionName={{
        enter: 'enter',
        leave: 'leave'
      }}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={3000}
      transitionAppear={false}
    >
      <img
        className='feature__over'
        key={featureList[id].id}
        src={featureList[id].pic}
        alt={featureList[id].name}
      />
    </ReactCSSTransitionGroup>
    <div className='feature--description'>
      <p><strong>{featureList[id].name}</strong></p>
      <p>{featureList[id].desc}</p>
    </div>
  </div>
);

class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      direction: 'left'
    };
  }

  changeId(id) {
    this.setState({ id });
  }

  swap(id) {
    this.setState({ id });
  }

  next() {
    const nextSlide = this.state.id + 1 < featureListEN.length ? this.state.id + 1 : 0;
    this.setState({ id: nextSlide, direction: 'right' });
  }

  prev() {
    const prevSlide = this.state.id - 1 < 0 ? featureListEN.length -1 : this.state.id - 1;
    this.setState({ id: prevSlide, direction: 'left' });
  }

  render() {
    let featureList = {};
    if (this.props.locale === 'ru') {
      featureList = featureListRU;
    } else {
      featureList = featureListEN;
    }

    return (
      <div className='page--segment'>
        <div className='page--content'>
          <h2>
            <FormattedMessage
              id='feature.title'
            />
          </h2>
          <div className='feature__container'>
            <Preview
              id={this.state.id}
              featureList={featureList}
            />
            <div className='feature__wrapper'>
              {featureList.map((feature, id) => <Feature
                data={feature}
                key={feature}
                id={id}
                change={v => this.changeId(v)}
              />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Features.propTypes = {
  locale: PropTypes.string.isRequired
};

Preview.propTypes = {
  id: PropTypes.number.isRequired,
  featureList: PropTypes.object.isRequired
};

Feature.propTypes = {
  change: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

export default Features;
