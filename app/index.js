require('./index.html')
var React = require('react')
var ReactDOM = require('react-dom')
var axios = require('axios')

import Timeline from './components/Timeline'
import Subscribe from './components/Subscribe'

require('bootstrap/dist/css/bootstrap.css')
require('font-awesome/css/font-awesome.css')
require('./styles/style.css')
require('./favicon.ico')

const personArticle = require('./images/person.jpg')
const footerPattern = require('./images/test.png')
const globus = require("./images/globus-full.svg")

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
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#what">О проекте </a></li>
        <li><a href="#AppDescription">Блог</a></li>
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
          <h4>историко-географический инструмент визуализации</h4><h4> интегрированных научных данных</h4>
        </div>
        <Subscribe />

     </div>

  </div>
);

const What = () => (
  <div id="what" className="container bg-what">

    {/* <div className="col-md-6 col-sm-6">
      <img src={globus} alt="Big Globus Picture" className="globus"/>
    </div>
    <div className="col-md-6 col-sm-6">
*/}


    <h3> Существующие инструменты не позволяют наглядно проследить взаимосвязи между историческими событиями в разных регионах.</h3>
     <h3>При помощи Хрониста можно не только решить эту проблему, но и самостоятельно отделить важные события от неважных, добавить новые, парой кликов собрать доклад или интерактивную презентацию, проверить свои догадки при помощи научно подтверждённых данных, расширить кругозор и в простой и занимательной форме вывести собственные причинно-следственные связи в мировой истории.</h3>
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
      <li><a href='https://vk.com/public139815700'><i className="social fa fa-vk" aria-hidden="true"></i></a></li>
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
