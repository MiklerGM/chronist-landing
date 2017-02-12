require('./index.html')
var React = require('react')
var ReactDOM = require('react-dom')
var axios = require('axios')

require('bootstrap/dist/css/bootstrap.css')
require('font-awesome/css/font-awesome.css')
require('./styles/style.css')
require('./favicon.ico')

const personArticle = require('./images/person.jpg')
const footerPattern = require('./images/test.png')
const ft1 = require("./images/ft-invetion.svg")
const ft2 = require("./images/ft-invetion2.svg")
const ft3 = require("./images/ft-catastrophe.svg")
const ft4 = require("./images/ft-catastrophe2.svg")
const ft5 = require("./images/ft-discovery.svg")
const ft6 = require("./images/ft-discovery2.svg")
const arrow = require("./images/long_arrow.svg")
const globus = require("./images/globus.svg")

const Navigation = () => (
  <nav className="navbar navbar-inverse navbar-absolute">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">Хронист</a>
    </div>

    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-left">
        <li><a href="#about">О пректе </a></li>
        <li><a href="#features">Help/FAQ</a></li>
        <li><a href="#blog">Блог</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><i className="social fa fa-vk" aria-hidden="true"></i></a></li>

      </ul>
    </div>
  </div>
  </nav>
);

const Title = () => (
  <div id="title" className="container-fluid bg-overlay">
    <div className="row text-center">
      <div className="thumbnail">
        
          <h1> ХРОНИСТ </h1>
          <h2> Наглядная география </h2>
          <h4>историко-географический инструмент визуализации интегрированных научных данных</h4>
        </div>
        <Subscribe />

     </div>    
  
  </div>
);

const What = () => (
  <div className="container bg-what">
  <div className="row">
    <div className="col-md-6 col-sm-6">
      <img src={globus} alt="Big Globus Picture" className="globus"/>
    </div>
    <div className="col-md-6 col-sm-6"> 

      
      <br />
    <h4> Существующие инструменты не позволяют наглядно проследить взаимосвязи между историческими событиями в разных регионах.
    При помощи Хрониста можно не только решить эту проблему, но и самостоятельно отделить важные события от неважных, добавить новые, парой кликов собрать доклад или интерактивную презентацию, проверить свои догадки при помощи научно подтверждённых данных, расширить кругозор и в простой и занимательной форме вывести собственные причинно-следственные связи в мировой истории.</h4>
    </div>
    </div>
  </div>
);

class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', error: '' };
  }

  render() {
    return (
    <div id="Subscribe" className="bg-2 text-center">
    <p>Получайте информацию о ходе проекта и датах запуска.</p>
    <form className="form-inline" action="email.php" onSubmit={(e) => {
      e.preventDefault();
      axios.post('/email.php', `email=${this.state.email}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }}>
      <div className="form-group">
        <div className="input-group">
          <input type="email" value={this.state.email} className="form-control" size="20" placeholder="Ваш E-mail" required onChange={(e) => {
            this.setState({...this.state, email: e.target.value });
          }} />
          <div className="input-group-btn">
            <button type="submit" className="btn btn-danger">Подписаться</button>
          </div>
        </div>
      </div>
      <div className="form-group">
        <a href="https://vk.com/public139815700" alt="Вконтакте"><button type="button" className="btn btn-primary"> <i className="fa fa-vk" aria-hidden="true"></i> Вконтакте </button></a>
      </div>
    </form>

    </div>
  );
  }
}

const Timeline =() => (
  <div id="timeline" className="container bg-4 ">
        <ul className="thumbnails row ">
            <div className="col-md-2 col-sm-2">
                <div className="thumbnail timeline-tmb">
                    <img src={ft1} alt="ALT NAME" className="img-responsive" />
                    <div className="caption-fix caption text-center ">
                         <h5>Политические границы</h5>
                         <h6 className="text-muted"> Март 2017 </h6>
                        <p>Изменения политических границ от античности до наших дней</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-2">
                <div className="thumbnail timeline-tmb">
                    <img src={ft3} alt="ALT NAME" className="img-responsive" />
                    <div className="caption text-center">
                         <h5>Географические открытия и войны</h5>
                         <h6 className="text-muted">Март 2017 </h6>
                        <p>Интерактивное отображение военных действий и исследовательских походов</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-2">
                <div className="thumbnail timeline-tmb">
                    <img src={ft6} alt="ALT NAME" className="img-responsive inactive" />
                    <div className="caption text-center">
                         <h5>Изобретения</h5>
                         <h6 className="text-muted">Март 2017 </h6>
                        <p>Хронология развития современного общества</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-2">
                <div className="thumbnail timeline-tmb">
                    <img src={ft1} alt="ALT NAME" className="img-responsive inactive" />
                    <div className="caption text-center">
                         <h5>Исследование данных</h5>
                         <h6 className="text-muted">Март 2017 </h6>
                        <p>Поиск корреляций и причинно-следственных связей между историческими событиями</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-2">
                <div className="thumbnail timeline-tmb">
                    <img src={ft3} alt="ALT NAME" className="img-responsive inactive" />
                    <div className="caption text-center">
                         <h5>Население</h5>
                         <h6 className="text-muted">Июнь 2017 </h6>
                        <p>Демографические изменения</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-2">
                <div className="thumbnail timeline-tmb">
                    <img src={ft6} alt="ALT NAME" className="img-responsive inactive" />
                    <div className="caption text-center">
                         <h5>Языки</h5>
                         <h6 className="text-muted">Сентябрь  2017 </h6>
                        <p>Распространение и эволюция языковых групп</p>
                    </div>
                </div>
            </div>
        </ul>

  {/*<!-- Arrow stuff put here-->*/}

        <div className="magic-arrow"><img src={arrow} /></div>

        <ul className="thumbnails row-fluid">
            <div className="col-md-2 col-sm-2 col-md-offset-1">
                <div className="thumbnail timeline-tmb">
                    <img src={ft1} alt="ALT NAME" className="img-responsive inactive" />
                    <div className="caption text-center">
                         <h5>Личные сценарии</h5>
                         <h6 className="text-muted">Сентябрь  2017 </h6>
                        <p>Добавление данных и создание собственных наборов отображаемых событий</p>
                    </div>
                </div>
            </div>

            <div className="col-md-2 col-sm-2">
                <div className="thumbnail timeline-tmb">
                    <img src={ft3} alt="ALT NAME" className="img-responsive inactive" />
                    <div className="caption text-center">
                         <h5>Экспорт данных в различные форматы</h5>
                         <h6 className="text-muted">Сентябрь  2017 </h6>
                        <p>Возможность экспортировать выбранную хронологию за период</p>
                    </div>
                </div>
            </div>

            <div className="col-md-2 col-sm-2">
                <div className="thumbnail timeline-tmb">
                    <img src={ft6} alt="ALT NAME" className="img-responsive inactive" />
                    <div className="caption text-center">
                         <h5>Религии</h5>
                         <h6 className="text-muted">Ноябрь  2017 </h6>
                        <p>Распространение религиозных течений</p>
                    </div>
                </div>
            </div>

            <div className="col-md-2 col-sm-2">
                <div className="thumbnail timeline-tmb">
                    <img src={ft1} alt="ALT NAME" className="img-responsive inactive" />
                    <div className="caption text-center">
                         <h5>Нации</h5>
                         <h6 className="text-muted">Ноябрь  2017 </h6>
                        <p>Происхождение и распределение расс по материкам</p>
                    </div>
                </div>
            </div>

            <div className="col-md-2 col-sm-2">
                <div className="thumbnail timeline-tmb">
                    <img src={ft3} alt="ALT NAME" className="img-responsive inactive" />
                    <div className="caption text-center">
                         <h5>Катастрофы</h5>
                         <h6 className="text-muted">Февраль  2017 </h6>
                        <p>Болезни, природные и техногенные катаклизмы на протяжении истории человечества</p>
                    </div>
                </div>
            </div>


        </ul>
  </div>
);

const Contact = () => (
  <footer className="bg-footer">
    <div>
      <p>Хронист 2017</p>

    </div>
    <ul>
      <li><a href="mailto:contact@chronist.ru">Email </a></li>
      {/*<li><a href="http://localhost:8080/#team"> Team </a></li> */}
    </ul>



  </footer>
);

var AppDescription = React.createClass({
  getInitialState: function () {
    return {
      showDefault: false
    }
  },

  toggle: function (e) {
    // Prevent following the link.
    e.preventDefault();

    // Invert the chosen default.
    // This will trigger an intelligent re-render of the component.
    this.setState({ showDefault: !this.state.showDefault })
  },

  render: function () {
    // Default to the default message.
    const article_begin = <p>Наука развивается, и по мере своего продвижения вперёд вбирает всё новые методы и способы. Сравнительно новое явление — геоинформационные системы — оказалось прекрасным средством освоения того, что сейчас называют «пространством». По мере накопления данных — в особенности гуманитарной сферы — учёному, студенту и даже школьнику, сталкивающимся с научным поиском, с работой над исследованиями, приходится иметь дело с ростом объёма информации, количества публикаций, интерпретаций одного и того же вопроса.</p>
    var article_end = <div><p>Обычно эта проблема решается — например, в студенческих и школьных проектах — игнорированием большой части материала, что снижает качество работ и вообще педагогически нецелесообразно. Грамотное решение лежит в другом направлении. Массив гуманитарных фактов (например, исторических, социальных и т.п.) представляется исследователю, преподавателю не как россыпь единичных событий — а как некое единое пространство. «Пространство смыслов, фактов» гораздо легче представить аудитории, осмыслить, проанализировать. Однако, объём оперативной памяти человека существенно ограничен. Для простых счётных предметов объём нашей оперативной памяти составляет всего 7±2 шт. (правило Миллера). Для сложных абстрактных понятий объём нашей оперативной памяти ещё меньше — 4±2 шт (эффект Эльштейна). Даже простое пространство, простой массив фактов в память могут «не поместится». Цель науки — открывать объективные законы. Этой цели подчинены и теоретические и экспериментальные исследования. Что такое закон? Закон есть существенное повторяющееся в явлении, объективно существующие связи, отношения между теми или иными явлениями (по В.И. Ульянову). Однако, избыток информации — точнее, те многочисленные факты, что не могут быть обработаны исследователями — превращаются в своего рода «информационный шум», который мешает установить взаимосвязи и законы. На помощь всем, кто работает в исторической, географической и прочих смежных областях приходят на помощь геоинформационные системы. Геоинформационная система (географическая информационная система, ГИС) — система сбора, хранения, анализа и графической визуализации пространственных (географических) данных и связанной с ними информации о необходимых объектах. Портал содержит информацию по большому количеству событий разного плана (политических событий, изобретений и открытий, природных явлений и т.п.), привязанных к географическим картам и расположенных хронологически. Способ представления пользователю позволяет составлять собственные подборки разноплановых событий, находить и устанавливать взаимосвязи между ними, работать с текстовыми описаниями, снабжать избранные события ссылками на внешние источники (например, научные библиотеки, публикации, видеохостинги и т.п.), иллюстрировать наглядно. Это значительно облегчит научно-педагогическую работу при преподавании истории, изучении ее в курсах ОДОД, написании учащимися проектных работ, проведении студентами и работниками вузов собственных исследований.</p> <span className="pull-right"> Модестов С.Ю., кандидат педагогических наук </span></div>
    var message = article_end
    var toggler = "Показать меньше"
    var article = "continue article";

    // If toggled, show the alternate message.
    if (!this.state.showDefault) {
      article_end = this.props.alt;
      toggler = "Показать больше"
    }

    return (
      <div id="AppDescription" className="container panel-body">
        <div className="media">

          <div className="media-left">
            <img className="img-circle media-object" src={personArticle} alt="person" />
          </div>

          <div className="media-body">
            <h3 className="media-heading">Немного науки</h3>
            {article_begin} {article_end}
          </div>
        </div>
         <a onClick={this.toggle} className="more pull-right"> {toggler} </a>
      </div>
    );
 }
});

const Test =({article_begin, article_end})=> (
  <div>
            article_begin={article_begin}
            <p> </p>
            <span className="pull-left"> Модестов Сергей </span>
  </div>
);

class Hello extends React.Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        <Title />
        <What />
        
        
        <Timeline />
        <AppDescription />
        <Contact />

    </div>
    );
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('app')
);
