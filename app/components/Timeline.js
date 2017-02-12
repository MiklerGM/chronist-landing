import React from 'react';

const ft1 = require("../images/ft-invetion.svg")
const ft2 = require("../images/ft-invetion2.svg")
const ft3 = require("../images/ft-catastrophe.svg")
const ft4 = require("../images/ft-catastrophe2.svg")
const ft5 = require("../images/ft-discovery.svg")
const ft6 = require("../images/ft-discovery2.svg")
const arrow = require("../images/long_arrow.svg")

const featureList = [
  {
    name: 'Политические границы',
    date: 'Март 2017',
    desc: 'Изменения политических границ от античности до наших дней',
    img: ft1,
    inactive: 0,
    offset: 0
  },
  {
    name: 'Географические открытия и войны',
    date: 'Март 2017',
    desc: 'Интерактивное отображение военных действий и исследовательских походов',
    img: ft3,
    inactive: 0,
    offset: 0
  },
  {
    name: 'Изобретения',
    date: 'Март 2017',
    desc: 'Хронология развития современного общества',
    img: ft6,
    inactive: 0,
    offset: 0
  },
  {
    name: 'Исследование данных',
    date: 'Март 2017',
    desc: 'Поиск корреляций и причинно-следственных связей между историческими событиями',
    img: ft1,
    inactive: 1,
    offset: 0
  },
  {
    name: 'Население',
    date: 'Июнь 2017',
    desc: 'Демографические изменения',
    img: ft3,
    inactive: 1,
    offset: 0
  },
  {
    name: 'Языки',
    date: 'Сентябрь 2017',
    desc: 'Распространение и эволюция языковых групп',
    img: ft6,
    inactive: 1,
    offset: 0
  },
  {
    name: 'Личные сценарии',
    date: 'Сентябрь 2017',
    desc: 'Добавление данных и создание собственных наборов отображаемых событий',
    img: ft1,
    inactive: 1,
    offset: 1
  },
  {
    name: 'Экспорт данных',
    date: 'Сентябрь 2017',
    desc: 'Возможность экспортировать выбранную хронологию за период',
    img: ft3,
    inactive: 1,
    offset: 0
  },
  {
    name: 'Религии',
    date: 'Ноябрь 2017',
    desc: 'Распространение религиозных течений',
    img: ft6,
    inactive: 1,
    offset: 0
  },
  {
    name: 'Нации',
    date: 'Ноябрь 2017',
    desc: 'Происхождение и распределение расс по материкам',
    img: ft3,
    inactive: 1,
    offset: 0
  },
  {
    name: 'Катастрофы',
    date: 'Февраль 2018',
    desc: 'Болезни, природные и техногенные катаклизмы на протяжении истории человечества',
    img: ft6,
    inactive: 1,
    offset: 0
  },
/*
  {
    name: '?',
    date: 'Май 2018',
    desc: 'Future tech',
    img: ft6,
    inactive: 1,
    offset: 0
  },
  */
]
const featureRows = [[...featureList.slice(0,6)],[...featureList.slice(6,11)]];
// console.log(featureRows)


// {/*<!-- Arrow stuff put here-->*/}
const Arrow = () => (
 <div className="magic-arrow"><img src={arrow} /></div>
);

const Feature = ({ feature }) => (
  <div className={`col-md-2 col-sm-2 ${feature.offset ? 'col-md-offset-1' : ''}`}>
    <div className="thumbnail timeline-tmb">
        <img src={feature.img} alt="ALT NAME" className={`img-responsive ${feature.inactive ? 'inactive' : ''}`} />
        <div className="caption-fix caption text-center ">
             <h5>{feature.name}</h5>
             <h6 className="text-muted"> {feature.date} </h6>
            <p>{feature.desc}</p>
        </div>
    </div>
  </div>
);

const FeatureRow = ({row}) => (
  <ul className="thumbnails row ">
    {row.map(feature => <Feature feature={feature} />)}
  </ul>
);

class Timeline extends React.Component {
  render () {
    return (
      <div id="timeline" className="container bg-4 ">
        <FeatureRow row={featureRows[0]} />
        <Arrow />
        <FeatureRow row={featureRows[1]} />
      </div>
    );
  }
}
export default Timeline;
