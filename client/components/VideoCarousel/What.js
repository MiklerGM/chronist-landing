import React from 'react';
if (process.env.WEBPACK) require('./What.less');
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6


const videoContent = require.context('./data', false, /\.m4v$/);
const videoIndex = [];
videoContent.keys().forEach((fileName, id) => {
  videoIndex[id] = fileName;
});
const ContentDescription = ['Изменение границ', 'Экспортирование материала', 'Дополнительная информация по клику', 'Воспроизведение'];

class Slide extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(videoIndex[this.props.slide]);
  }

  render() {
    return (
      <div className={`item ${this.props.direction}`}>
          <video
            controls
            autoPlay
            loop
            preload='metadata'
            src={videoContent(videoIndex[this.props.slide])}
          />
          {ContentDescription[this.props.slide]}
      </div>
    );
  }
}


class ModalVideo extends React.Component {
  constructor(props) {
    super(props);
  }

  onSwipe(e) {
    console.log(e);
    if (e.deltaY > 0) {
      this.handleNext();
    } else if (e.deltaY < 0) {
      this.handlePrevious();
    }
  }

  render() {
    if (this.props.isOpen === true) {

    // let directionClass = (this.props.direction == 'left' ? {
    //           enter: 'enter-left',
    //           leave: 'leave-left'
    //         } : {
    //           enter: 'enter-right',
    //           leave: 'leave-right'
    //         }

    return (
      <div className='overlay'>
        <div className='video--container' >
          <ReactCSSTransitionGroup
            transitionName={(this.props.direction == 'left') ? {
              enter: 'enter-left',
              leave: 'leave-left'
            } : {
              enter: 'enter-right',
              leave: 'leave-right'
            }}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
            transitionAppear={false}
            transitionEnter={true}
            transitionLeave={true}
          >
            <Slide key={this.props.id} slide={this.props.id} direction={this.props.direction} />
              {/*
                >
                  {id}
                 { videoContent.keys().map((fileName, id) =>
                <button
                  className={ (id == this.props.id) ? 'active background' : 'background'}
                  key={id}
                  onClick={() => this.swap(id)}
                  title={ContentDescription[id]}
                <video
                    // width='100'
                    src={videoContent(fileName)}
                  />
                </button>
              )}
              */}
        </ReactCSSTransitionGroup>

              </div>
          <div
            onClick={() => this.props.prev()}
            className='overlay--control overlay--control__left'>
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </div>
          <div
            onClick={() => this.props.next()}
            className='overlay--control overlay--control__right'>
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </div>
      </div>
    );
  } else {return null}
  }
}

class What extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isOpen: true,
      direction: 'left'
    }
  }

  componentDidMount() {
    console.log(videoIndex.length);
  }

  swap = (id) => {
    this.setState({ counter: id });
  }

  next = () => {
    let nextSlide = this.state.counter + 1 < videoIndex.length ?  this.state.counter + 1 : 0;
    this.setState({ counter: nextSlide, direction: 'right'});
  }

  prev = () => {
    let prevSlide = this.state.counter - 1 < 0 ? videoIndex.length -1 : this.state.counter - 1;
    this.setState({ counter: prevSlide, direction: 'left'});
  }

  render() {
    return (
      <div id="what" className='row'>
        <ModalVideo
          isOpen={this.state.isOpen}
          onClose={() => this.setState({isOpen: false})}
          id={this.state.counter}
          next={this.next}
          prev={this.prev}
          direction={this.state.direction}
        />
      {/*
         <div className='bg-what'>

           <div className='container'>
             <div className="col-md-6 col-sm-6 text-center VideoGallery container">
               <video src={videoContent(videoIndex[this.state.counter])} autoPlay loop />
               <p> {ContentDescription[this.state.counter]} </p>


               <div className='row'>
                 { videoContent.keys().map((fileName, id) =>
                <button
                  className='col-xs-3'
                  key={`vc_${fileName}`}
                  onClick={() => this.swap(id)}
                  title={ContentDescription[id]}
                >
                  <video
                    width='100'
                    src={videoContent(fileName)}
                  />
                </button>
              )}

              </div>

            </div>

            <div className="col-md-6 col-sm-6 what-desc container">

            </div>
          </div>
        </div>
        <hr />
      */}
      </div>
    );
  }


}

export default What;
