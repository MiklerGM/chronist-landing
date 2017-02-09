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

const AppDescription = () => (
  <div className="container panel-body">
      <div className="media">
          <div className="media-left">
            <img className="img-circle media-object" src={personArticle} alt="person" />
          </div>
          <div className="media-body">
          <h4 className="media-heading">Что это?</h4>
          <p>Портал содержит информацию по большому количеству событий разного плана (политических событий, изобретений и открытий, природных явлений и т.п.), привязанных к географическим картам и расположенных хронологически. Способ представления пользователю позволяет составлять собственные подборки разноплановых событий, находить и устанавливать взаимосвязи между ними, работать с текстовыми описаниями, снабжать избранные события ссылками на внешние источники (например, научные библиотеки, публикации, видеохостинги и т.п.), иллюстрировать наглядно. Это значительно облегчит научно-педагогическую работу при преподавании истории, изучении ее в курсах ОДОД, написании учащимися проектных работ, проведении студентами и работниками вузов собственных исследований.</p>                
         </div>
      </div>
  </div>
);

const What = () => (
  <div>
    <p> Lorem Ipsum</p>
  </div>
);

const Subscribe = () => (
  <div id="Subscribe" className="bg-2 text-center"> 
  <p>Проект находится в разработке. Подпишитесь на нашу рассылку</p> 
  <form className="form-inline">
    <div className="input-group">
      <input type="email" className="form-control" size="30" placeholder="Ваш E-mail" required />
      <div className="input-group-btn">
        <button type="button" className="btn btn-danger">Подписаться</button>
      </div>
    </div>
  </form>

    
    <p>Или подпишитесь на нас в социальных сетях</p> 
    <div className="sns">

    <a href="https://vk.com"><span> Вконтакте </span></a> 
    </div>

  </div>
);

const Timeline =() => (
  <div id="features" className="container">
    <div className="page-header">

        <h1 id="timeline"> У нас есть 955.5 исторических и географических данных</h1>
    </div>
    <ul className="timeline">
        <li>
          <div className="timeline-badge"><img src={ft1} alt="presentation" height="50" /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Географические открытия и войны</h4>
            </div>
            <div className="timeline-body">
              <p>Интерактивное отображение военных действий и исследовательских походов</p>
              <p className="text-muted">март 2017</p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-badge"><img src={ft2} alt="presentation" height="50" /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Изобретения</h4>
            </div>
            <div className="timeline-body">
              <p>Хронология развития общества, отображение изобретений на карте мира</p>
              <p className="text-muted">март 2017</p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-badge"><img src={ft3} alt="presentation" height="50" /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Население</h4>
            </div>
            <div className="timeline-body">
              <p>Демографические изменения для стран и населенных пунтков</p>
              <p className="text-muted">март 2017</p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-badge"><img src={ft4} alt="presentation" height="50" /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Пользовательские сценарии</h4>
            </div>
            <div className="timeline-body">
              <p>Добавление данных и создание собственных наборов отображаемых событий.</p>
              <p className="text-muted">сентябрь 2017</p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-badge"><img src={ft5} alt="presentation" height="50" /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Разнообразие данных</h4>
            </div>
            <div className="timeline-body">
              <p>Политические границы. Их изменения от античности до наших дней. Нации, происхождение и распределение расс по материкам, религии, катастрофы, болезни, природные и техногенные катаклизмы на протяжении истории человечества</p>
              <p className="text-muted">март 2017</p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-badge"><img src={ft6} alt="presentation" height="50" /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Экспорт данных в различные форматы</h4>
            </div>
            <div className="timeline-body">
              <p>Наличие различных опций для сохранения исследований. Возможность экспортировать выбранную хронологию за период.</p>
              <p className="text-muted">сентябрь 2017</p>
            </div>
          </div>
        </li>
    </ul>
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
      <p>&copy;  Chronist 2017</p>
      <p>Language</p>
      
    </div>
    <ul className="pull-right">
      <li><a href="mailto://support@chronist.ru">Contact </a></li>
      <li><a href="http://localhost:8080/#team"> Team </a></li>
    </ul>
    
    
    
  </footer>
);

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
