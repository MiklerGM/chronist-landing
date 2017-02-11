require('./index.html')
var React = require('react')
var ReactDOM = require('react-dom')

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
      <h1>ХРОНИСТ</h1>
      <h3>историко-географический инструмент визуализации интегрированных научных данных</h3>
      <button className="btn btn-success disabled"> Войти </button> 
    </div>
  </div>
);


const What = () => (
  <div className="what container text-center">
    <p> Существующие инструменты не позволяют наглядно проследить взаимосвязи между историческими событиями в разных регионах.
    При помощи Хрониста можно не только решить эту проблему, но и самостоятельно отделить важные события от неважных, добавить новые, парой кликов собрать доклад или интерактивную презентацию, проверить свои догадки при помощи научно подтверждённых данных, расширить кругозор и в простой и занимательной форме вывести собственные причинно-следственные связи в мировой истории.</p>
  </div>
);

const Subscribe = () => (
  <div id="Subscribe" className="bg-2 text-center"> 
  <p>Проект находится в разработке. Подпишитесь на нашу рассылку ли подпишитесь на нас в социальных сетях</p> 
  <form className="form-inline">
    <div className="form-group">
      <div className="input-group">
        <input type="email" className="form-control" size="20" placeholder="Ваш E-mail" required />
        <div className="input-group-btn">
          <button type="button" className="btn btn-danger">Подписаться</button>
        </div>
      </div>
    </div>
    <div className="form-group">
      <button type="button" className="btn btn-primary"> <i className="fa fa-vk" aria-hidden="true"></i> Contact us</button>
    </div>
  </form>

  </div>
);

const Timeline =() => (
  <div className="bg-2">
    <div className="container">
      <ul className="timeline">
    <li>
        <div className="timeline-badge">
          <img src={ft1} alt="presentation" height="50" />
        </div>
        <div className="timeline-panel">
            <div className="timeline-heading">
                <h4>Географические открытия и войны</h4>
            </div>
            <div className="timeline-body">
                <p>Интерактивное отображение военных действий и исследовательских походов.</p>
            </div>
            <hr />
            <div className="timeline-footer">
                <span className="text-left"> Учтено данных: 0 </span>
                <span className="text-right">Март 2017</span>
            </div>
        </div>
    </li>
    
    <li className="timeline-inverted">
        <div className="timeline-badge">
          <img src={ft1} alt="presentation" height="50" />
        </div>
        <div className="timeline-panel">
            <div className="timeline-heading">
                <h4>Политические границы</h4>
            </div>
            <div className="timeline-body">
                <p>Изменения политических границ от античности до наших дней
                </p>
            </div>
            <hr />
            <div className="timeline-footer">
                <span className="text-left"> Учтено данных: 0 </span>
                <span className="text-right">Март 2017</span>
            </div>
        </div>
    </li>
    
    <li>
        <div className="timeline-badge">
          <img src={ft1} alt="presentation" height="50" />
        </div>
        <div className="timeline-panel">
            <div className="timeline-heading">
                <h4>Исследование данных</h4>
            </div>
            <div className="timeline-body">
                <p>Поиск корреляций и причинно-следственных связей между историческими событиями</p>
            </div>
            <hr />
            <div className="timeline-footer">
                <span className="text-left"> Учтено данных: 0 </span>
                <span className="text-right">Март 2017</span>
            </div>
        </div>
    </li>
    
    <li className="timeline-inverted">
        <div className="timeline-badge">
          <img src={ft1} alt="presentation" height="50" />
        </div>
        <div className="timeline-panel">
            <div className="timeline-heading">
                <h4>Политические границы

  </h4>
            </div>
            <div className="timeline-body">
                <p>Изменения политических границ от античности до наших дней</p>
            </div>
            <hr />
            <div className="timeline-footer">
                <span className="text-left"> Учтено данных: 0 </span>
                <span className="text-right">Март 2017</span>
            </div>
        </div>
    </li>
    
    <li>
        <div className="timeline-badge">
          <img src={ft1} alt="presentation" height="50" />
        </div>
        <div className="timeline-panel">
            <div className="timeline-heading">
                <h4>Население</h4>
            </div>
            <div className="timeline-body">
                <p>Демографические изменения</p>
            </div>
            <hr />
            <div className="timeline-footer">
                <span className="text-right">Июнь 2017</span>
            </div>
        </div>
    </li>
    
    <li  className="timeline-inverted">
        <div className="timeline-badge">
          <img src={ft1} alt="presentation" height="50" />
        </div>
        <div className="timeline-panel">
            <div className="timeline-heading">
                <h4>Пользовательские сценарии</h4>
            </div>
            <div className="timeline-body">
                <p>Добавление данных и создание собственных наборов отображаемых событий</p>
            </div>
            <hr />
            <div className="timeline-footer">
                <span className="text-right">Сентябрь 2017</span>
            </div>
        </div>
    </li>

    <li>
        <div className="timeline-badge">
          <img src={ft1} alt="presentation" height="50" />
        </div>
        <div className="timeline-panel">
            <div className="timeline-heading">
                <h4>Языки</h4>
            </div>
            <div className="timeline-body">
                <p>Распространение и эволюция языковых групп</p>
            </div>
            <hr />
            <div className="timeline-footer">
                <span className="text-right">Сентябрь 2017</span>
            </div>
        </div>
    </li>

    <li  className="timeline-inverted">
        <div className="timeline-badge">
          <img src={ft1} alt="presentation" height="50" />
        </div>
        <div className="timeline-panel">
            <div className="timeline-heading">
                <h4>Экспорт данных в различные форматы</h4>
            </div>
            <div className="timeline-body">
                <p>Возможность экспортировать выбранную хронологию за период</p>
            </div>
            <hr />
            <div className="timeline-footer">
                <span className="pull-right">Сентябрь 2017</span>
            </div>
        </div>
    </li>    

    <li>
        <div className="timeline-badge">
          <img src={ft1} alt="presentation" height="50" />
        </div>
        <div className="timeline-panel">
            <div className="timeline-heading">
                <h4>Религии</h4>
            </div>
            <div className="timeline-body">
                <p>распространение религиозных течений</p>
            </div>
            <hr />
            <div className="timeline-footer">
                <span className="text-right">Ноябрь 2017</span>
            </div>
        </div>
    </li>

    <li  className="timeline-inverted">
        <div className="timeline-badge">
          <img src={ft1} alt="presentation" height="50" />
        </div>
        <div className="timeline-panel">
            <div className="timeline-heading">
                <h4>Катастрофы</h4>
            </div>
            <div className="timeline-body">
                <p>Болезни, природные и техногенные катаклизмы на протяжении истории человечества</p>
            </div>
            <hr />
            <div className="timeline-footer">
                <span className="pull-right">Февраль 2018</span>
            </div>
        </div>
    </li>     

    <li>
        <div className="timeline-badge">
          <img src={ft1} alt="presentation" height="50" />
        </div>
        <div className="timeline-panel">
            <div className="timeline-heading">
                <h4>Нации</h4>
            </div>
            <div className="timeline-body">
                <p>Происхождение и распределение расс по материкам</p>
            </div>
            <hr />
            <div className="timeline-footer">
                <span className="text-right">Февраль 2018</span>
            </div>
        </div>
    </li>



    <li className="clearfix no-float"></li>
      </ul>
    </div>
  </div>
);


const Blog = () => (
  <div id="blog" className="article">
  <hr />
  <div className="container odd">
    <div className="span8">
          <h1>Article name first</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum ex eget porttitor sollicitudin. Morbi cursus tempor placerat. Pellentesque   suscipit tortor in orci pretium, ac facilisis ex pretium. Fusce hendrerit orci diam, vitae tristique quam porttitor eu. Donec ligula orci, ultricies in   sagittis non, porta sed lorem. Aenean interdum posuere mattis. Curabitur dignissim dictum quam, vitae malesuada velit tristique a. </p>
          <div>
              <div className="more label"><a href="#">Read more</a></div> 
          </div> 
          <div className="clear"></div>
      </div>
  </div>
  <div className="container even">
    <div className="span8">
          <h1>Article name second</h1>
          <p>Sed interdum massa ac pretium faucibus. Integer semper euismod lorem faucibus molestie. Aenean luctus ut metus eget dignissim. Sed tincidunt augue non   elementum pharetra. Suspendisse non feugiat urna. Etiam egestas neque euismod neque sollicitudin consectetur. Fusce facilisis augue a velit porta   scelerisque. Sed mattis justo sapien. Sed ultrices lectus diam, id vestibulum ante finibus a. </p>
          <div>
              <div className="more label"><a href="#">Read more</a></div> 
          </div>     
    </div>
  </div>
  <div className="container odd">
    <div className="span8">
          <h1>Article name third</h1>
          <p>Sed interdum massa ac pretium faucibus. Integer semper euismod lorem faucibus molestie. Aenean luctus ut metus eget dignissim. Sed tincidunt augue non   elementum pharetra. Suspendisse non feugiat urna. Etiam egestas neque euismod neque sollicitudin consectetur. Fusce facilisis augue a velit porta   scelerisque. Sed mattis justo sapien. Sed ultrices lectus diam, id vestibulum ante finibus a. </p>
          <div>
              <div className="more label"><a href="#">Read more</a></div> 
          </div>     
    </div>
  </div>
  <div className="container even">
    <div className="span8">
          <h1>Article name fourth</h1>
          <p>Sed interdum massa ac pretium faucibus. Integer semper euismod lorem faucibus molestie. Aenean luctus ut metus eget dignissim. Sed tincidunt augue non   elementum pharetra. Suspendisse non feugiat urna. Etiam egestas neque euismod neque sollicitudin consectetur. Fusce facilisis augue a velit porta   scelerisque. Sed mattis justo sapien. Sed ultrices lectus diam, id vestibulum ante finibus a. </p>
          <div>
              <div className="more label"><a href="#">Read more</a></div> 
          </div>     
    </div>
  </div>  
  <hr />
  </div>
);

const Contact = () => (
  <footer className="bg-4 text-center">
    <div className="pull-left">
      <p>Хронист 2017</p>
      
    </div>
    <ul className="pull-right">
      <li><a href="mailto://support@chronist.ru">Email </a></li>
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
    const article_begin = "Наука развивается, и по мере своего продвижения вперёд вбирает всё новые методы и способы. Сравнительно новое явление — геоинформационные системы — оказалось прекрасным средством освоения того, что сейчас называют «пространством». По мере накопления данных — в особенности гуманитарной сферы — учёному, студенту и даже школьнику, сталкивающимся с научным поиском, с работой над исследованиями, приходится иметь дело с ростом объёма информации, количества публикаций, интерпретаций одного и того же вопроса."
    const article_end = "Обычно эта проблема решается — например, в студенческих и школьных проектах — игнорированием большой части материала, что снижает качество работ и вообще педагогически нецелесообразно. Грамотное решение лежит в другом направлении. Массив гуманитарных фактов (например, исторических, социальных и т.п.) представляется исследователю, преподавателю не как россыпь единичных событий — а как некое единое пространство. «Пространство смыслов, фактов» гораздо легче представить аудитории, осмыслить, проанализировать. Однако, объём оперативной памяти человека существенно ограничен. Для простых счётных предметов объём нашей оперативной памяти составляет всего 7±2 шт. (правило Миллера). Для сложных абстрактных понятий объём нашей оперативной памяти ещё меньше — 4±2 шт (эффект Эльштейна). Даже простое пространство, простой массив фактов в память могут «не поместится». Цель науки — открывать объективные законы. Этой цели подчинены и теоретические и экспериментальные исследования. Что такое закон? Закон есть существенное повторяющееся в явлении, объективно существующие связи, отношения между теми или иными явлениями (по В.И. Ульянову). Однако, избыток информации — точнее, те многочисленные факты, что не могут быть обработаны исследователями — превращаются в своего рода «информационный шум», который мешает установить взаимосвязи и законы. На помощь всем, кто работает в исторической, географической и прочих смежных областях приходят на помощь геоинформационные системы. Геоинформационная система (географическая информационная система, ГИС) — система сбора, хранения, анализа и графической визуализации пространственных (географических) данных и связанной с ними информации о необходимых объектах. Портал содержит информацию по большому количеству событий разного плана (политических событий, изобретений и открытий, природных явлений и т.п.), привязанных к географическим картам и расположенных хронологически. Способ представления пользователю позволяет составлять собственные подборки разноплановых событий, находить и устанавливать взаимосвязи между ними, работать с текстовыми описаниями, снабжать избранные события ссылками на внешние источники (например, научные библиотеки, публикации, видеохостинги и т.п.), иллюстрировать наглядно. Это значительно облегчит научно-педагогическую работу при преподавании истории, изучении ее в курсах ОДОД, написании учащимися проектных работ, проведении студентами и работниками вузов собственных исследований."
    var message = article_end;
    var toggler = "Show less"
    
    // If toggled, show the alternate message.
    if (!this.state.showDefault) {
      message = this.props.alt;
      toggler = "Read More"
    }
    
    return (
      <div className="container panel-body">
        <div className="media">
          <div className="media-left">
            <img className="img-circle media-object" src={personArticle} alt="person" />
          </div>
        <div className="media-body">
          <h4 className="media-heading">Что это?</h4>
          <p>{article_begin} {message}</p>
          </div>
        
        <div className="more label"><a href="" onClick={this.toggle}> {toggler} </a>
      </div>
      </div>
      </div>
    );
  }
});

var article = "continue article";

class Hello extends React.Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        <Title />
        <What />
        <Subscribe />
        <AppDescription />
        <Timeline />
        <Contact />
    </div>
    );
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('app')
);
