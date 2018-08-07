import React from 'react';

const videoContent = require.context('./data', false, /\.m4v$/);
const videoIndex = [];
videoContent.keys().forEach((fileName, id) => {
  videoIndex[id] = fileName;
});
const ContentDescription = ['Изменение границ', 'Экспортирование материала', 'Дополнительная информация по клику', 'Воспроизведение'];

class What extends React.Component {
  state = { currentPic: 0, }

  swap = (id) => {
    this.setState({ currentPic: id });
  }

  render() {

    return (
      <div id="what" className='row'>
        <div className='bg-what'>

          <div className='container'>
            <div className="col-md-6 col-sm-6 text-center VideoGallery container">
              <video src={videoContent(videoIndex[this.state.currentPic])} autoPlay loop />
              <p> {ContentDescription[this.state.currentPic]} </p>


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
              <h4> Существующие инструменты не позволяют наглядно проследить
                взаимосвязи между историческими событиями в разных регионах.
              </h4>
              <h4>При помощи Хрониста можно не только решить эту проблему,
                но и самостоятельно отделить важные события от неважных, добавить новые,
                парой кликов собрать доклад или интерактивную презентацию, проверить свои
                догадки при помощи научно подтверждённых данных, расширить кругозор и в
                простой и занимательной форме вывести
                собственные причинно-следственные связи в мировой истории.
              </h4>
              <a href='https://maps.chronist.ru/'> Перейти к Демо</a>
            </div>

          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default What;
