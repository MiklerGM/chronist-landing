import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import featureList from './TimelineDataEN';

class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaused: true,
    };
  }

  // handleClick() {
    // VideoControls
    // this.setState({ isPaused: !this.state.isPaused });
    // this.state.isPaused ? this.video.play() : this.video.pause();
  // }

  render() {
    return (
      <div className='item' scroll="no">
        <img
          alt={featureList[this.props.slide].name}
          src={featureList[this.props.slide].pic}
        />
        <div className='item--description'>
          <p><strong>{featureList[this.props.slide].name} </strong></p>
          <p>{featureList[this.props.slide].desc}</p>
        </div>
      </div>
    );
  }
}


class ModalOverlay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.overlay === true) {
      return (
        <div className='overlay'>
          <ReactCSSTransitionGroup
            component="div"
            className="video--container"
            transitionName={(this.props.direction === 'left') ? {
              enter: 'enter-left',
              leave: 'leave-left'
            } : {
              enter: 'enter-right',
              leave: 'leave-right'
            }}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            transitionAppear={false}
          >
            <Slide key={this.props.id} slide={this.props.id} direction={this.props.direction} />
          </ReactCSSTransitionGroup>
          <div
            onClick={() => this.props.prev()}
            className='overlay--control overlay--control__left'
          >
            <i>&#706;</i>
          </div>
          <div
            onClick={() => this.props.next()}
            className='overlay--control overlay--control__right'
          >
            <i>&#707;</i>
          </div>
          <div
            onClick={() => this.props.closeOverlay()}
            className='overlay--control__close'
          >
            <i>&#x2715;</i>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ModalOverlay;
