import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

import featureList from './TimelineData';
import ModalOverlay from './Overlay';

if (process.env.WEBPACK) require('./Features.less');

const pic0 = require('./data/greymapsimple.png');

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

const Preview = ({ id, openOverlay }) => (
  <div
    className='feature--preview'
    // onClick={() => openOverlay()}
  >
    <ReactCSSTransitionGroup
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
      {/*
      <img classNa`me='feature__under' src={pic0} />
    */}
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
    let nextSlide = this.state.id + 1 < featureList.length ?  this.state.id + 1 : 0;
    this.setState({ id: nextSlide, direction: 'right'});
  }

  prev = () => {
    let prevSlide = this.state.id - 1 < 0 ? featureList.length -1 : this.state.id - 1;
    this.setState({ id: prevSlide, direction: 'left'});
  }

  render() {
    return (
      <div className='page--content'>
        <div className='container'>
          <ModalOverlay
            overlay={this.state.overlay}
            closeOverlay={() => this.setState({overlay: false})}
            id={this.state.id}
            next={this.next}
            prev={this.prev}
            direction={this.state.direction}
          />
          <h2> Функционал </h2>
          <div className='col-md-6'>
            <Preview
              id={this.state.id}
              openOverlay={() => this.setState({ overlay: true })}
            />
          </div>
          <div className='col-md-6'>
            {featureList.map((feature, id)  => <Feature
              data={feature}
              key={id}
              id={id}
              change={this.changeId}
            /> )}
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
