import React from 'react';
// import '../styles/appdesc.less';

if (process.env.WEBPACK) require('./appdesc.less'); // eslint-disable-line global-require


const personArticle = require('../../images/person.jpg');


class AppDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showDefault: false };
  }

  toggle(e) {
    e.preventDefault();
    this.setState({ showDefault: !this.state.showDefault });
  }

  render() {
    // Default to the default message.
    const ArticleBegin = <p>Наука развивается, и по мере своего продвижения вперёд вбирает всё новые методы и способы. Сравнительно новое явление — геоинформационные системы — оказалось прекрасным средством освоения того, что сейчас называют «пространством». По мере накопления данных — в особенности гуманитарной сферы — учёному, студенту и даже школьнику, сталкивающимся с научным поиском, с работой над исследованиями, приходится иметь дело с ростом объёма информации, количества публикаций, интерпретаций одного и того же вопроса.</p>;
    let ArticleEnd = <div><p>Обычно эта проблема решается — например, в студенческих и школьных проектах — игнорированием большой части материала, что снижает качество работ и вообще педагогически нецелесообразно. Грамотное решение лежит в другом направлении. Массив гуманитарных фактов (например, исторических, социальных и т.п.) представляется исследователю, преподавателю не как россыпь единичных событий — а как некое единое пространство. «Пространство смыслов, фактов» гораздо легче представить аудитории, осмыслить, проанализировать. Однако, объём оперативной памяти человека существенно ограничен. Для простых счётных предметов объём нашей оперативной памяти составляет всего 7±2 шт. (правило Миллера). Для сложных абстрактных понятий объём нашей оперативной памяти ещё меньше — 4±2 шт (эффект Эльштейна). Даже простое пространство, простой массив фактов в память могут «не поместится». Цель науки — открывать объективные законы. Этой цели подчинены и теоретические и экспериментальные исследования. Что такое закон? Закон есть существенное повторяющееся в явлении, объективно существующие связи, отношения между теми или иными явлениями (по В.И. Ульянову). Однако, избыток информации — точнее, те многочисленные факты, что не могут быть обработаны исследователями — превращаются в своего рода «информационный шум», который мешает установить взаимосвязи и законы. На помощь всем, кто работает в исторической, географической и прочих смежных областях приходят на помощь геоинформационные системы. Геоинформационная система (географическая информационная система, ГИС) — система сбора, хранения, анализа и графической визуализации пространственных (географических) данных и связанной с ними информации о необходимых объектах. Портал содержит информацию по большому количеству событий разного плана (политических событий, изобретений и открытий, природных явлений и т.п.), привязанных к географическим картам и расположенных хронологически. Способ представления пользователю позволяет составлять собственные подборки разноплановых событий, находить и устанавливать взаимосвязи между ними, работать с текстовыми описаниями, снабжать избранные события ссылками на внешние источники (например, научные библиотеки, публикации, видеохостинги и т.п.), иллюстрировать наглядно. Это значительно облегчит научно-педагогическую работу при преподавании истории, изучении ее в курсах ОДОД, написании учащимися проектных работ, проведении студентами и работниками вузов собственных исследований.</p></div>;
    let toggler = 'Показать меньше';

    // If toggled, show the alternate message.
    if (!this.state.showDefault) {
      ArticleEnd = this.props.alt;
      toggler = 'Показать больше';
    }

    return (
      <div id="ScienceArticle" className='row'>
        <div className='bg-what'>
          <div className='container'>

          <div className="col-sm-4 container">
            <span className='person'>
              <img className="img-responsive img-circle person text-center" src={personArticle} alt="person" />
              <h4 className="text-center"> Модестов Сергей </h4>
              <p> кандидат педагогических наук </p>
            </span>
          </div>
          <div className="ArticlePreview col-sm-8 container">
            <h3>Немного науки</h3>
            { ArticleBegin } { ArticleEnd }
          <button onClick={e => this.toggle(e)} className="more pull-right"> {toggler} </button>
          </div>
        </div>
      </div>
      <hr />
      </div>
    );
  }
}

export default AppDescription;