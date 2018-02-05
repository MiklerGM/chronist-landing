import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { FormattedMessage } from 'react-intl';

import featureListRU from './TimelineDataRU';
import featureListEN from './TimelineDataEN';
import ModalOverlay from './Overlay';

if (process.env.WEBPACK) require('./Features.less');

// const pic0 = require('./data/preview-greymapsimple.png');

class Feature extends React.Component {
  render() {
    return (
      <div
        onClick={() => this.props.change(this.props.data.id)}
        onMouseOver={() => this.props.change(this.props.data.id)}
      >
        <img
          src={this.props.data.img}
          alt="ALT NAME"
          className={`img-responsive img-feature ${this.props.data.inactive ? 'inactive' : ''}`}
        />
      </div>
    );
  }
}

const Preview = ({ id, openOverlay, featureList }) => (
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
      <img className='feature__over' key={featureList[id].id} src={featureList[id].pic} />
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
      overlay: false,
      direction: 'left'
    };
  }

  changeId = (id) => {
    this.setState({ id: id });
  }

  swap = (id) => {
    this.setState({ id: id });
  }

  next = () => {
    const nextSlide = this.state.id + 1 < featureListEN.length ?  this.state.id + 1 : 0;
    this.setState({ id: nextSlide, direction: 'right'});
  }

  prev = () => {
    const prevSlide = this.state.id - 1 < 0 ? featureListEN.length -1 : this.state.id - 1;
    this.setState({ id: prevSlide, direction: 'left'});
  }

  render() {
    let featureList = {};
    if (this.props.locale === 'ru') {
      featureList = featureListRU;
    } else {
      featureList = featureListEN;
    }
    // let featureList = featureListEN;

    return (
      <div className='page--segment'>
        <div className='page--content'>
          <h2>
            <FormattedMessage
              id='feature.title'
            />
          </h2>
          <div className='feature__container'>
            <ModalOverlay
              overlay={this.state.overlay}
              closeOverlay={() => this.setState({overlay: false})}
              id={this.state.id}
              next={this.next}
              prev={this.prev}
              direction={this.state.direction}
            />
              <Preview
                id={this.state.id}
                openOverlay={() => this.setState({ overlay: true })}
                featureList={featureList}
              />
            <div className='feature__wrapper'>
              {featureList.map((feature, id)  => <Feature
                data={feature}
                key={id}
                id={id}
                change={this.changeId}
              /> )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
