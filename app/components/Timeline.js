import React from 'react';

require('../styles/timeline.css')

const ft1 = require("../images/Границы.svg")
const ft2 = require("../images/Войны.svg")
const ft3 = require("../images/Изобретения.svg")
const ft4 = require("../images/Исследования.svg")
const ft5 = require("../images/Нации.svg")
const ft6 = require("../images/Языки.svg")
const ft7 = require("../images/Настройки.svg")
const ft8 = require("../images/Экспорт.svg")
const ft9 = require("../images/Религии.svg")
const ft10 = require("../images/Нации.svg")
const ft11 = require("../images/Катастрофы.svg")
const ft12 = require("../images/Пустая.svg")
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
    img: ft2,
    inactive: 0,
    offset: 0
  },
  {
    name: 'Изобретения',
    date: 'Март 2017',
    desc: 'Хронология развития современного общества',
    img: ft3,
    inactive: 0,
    offset: 0
  },
  {
    name: 'Исследование данных',
    date: 'Март 2017',
    desc: 'Поиск корреляций и причинно-следственных связей между историческими событиями',
    img: ft4,
    inactive: 1,
    offset: 0
  },
  {
    name: 'Население',
    date: 'Июнь 2017',
    desc: 'Демографические изменения',
    img: ft5,
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
    img: ft7,
    inactive: 1,
    offset: 0
  },
  {
    name: 'Экспорт данных',
    date: 'Сентябрь 2017',
    desc: 'Возможность экспортировать выбранную хронологию за период',
    img: ft8,
    inactive: 1,
    offset: 0
  },
  {
    name: 'Религии',
    date: 'Ноябрь 2017',
    desc: 'Распространение религиозных течений',
    img: ft9,
    inactive: 1,
    offset: 0
  },
  {
    name: 'Нации',
    date: 'Ноябрь 2017',
    desc: 'Происхождение и распределение расс по материкам',
    img: ft10,
    inactive: 1,
    offset: 0
  },
  {
    name: 'Катастрофы',
    date: 'Февраль 2018',
    desc: 'Болезни, природные и техногенные катаклизмы на протяжении истории человечества',
    img: ft11,
    inactive: 1,
    offset: 0
  },
  {
    name: '',
    date: '',
    desc: '',
    img: ft12,
    inactive: 1,
    offset: 0
  },
]
const featureRows = [[...featureList.slice(0,4)],[...featureList.slice(4,8)],[...featureList.slice(8,12)]];
// console.log(featureRows)

let ids = {row: 0, feature:0};
const getId = (type) => {
  const id = ids[type];
  ids[type] = ids[type] + 1;
  return `${type}_${id}`;
}

// {/*<!-- Arrow stuff put here-->*/}
const Arrow = () => (
 <div className="magic-arrow"><img src={arrow} /></div>
);

const Feature = ({ feature, key }) => (
  <div key={key} className={`col-md-3 col-sm-3 ${feature.offset ? 'col-md-offset-1' : ''}`}>
    <div key={`${key}_thumb`} className="thumbnail timeline-tmb">
        <img key={`${key}_img`} src={feature.img} alt="ALT NAME" className={`img-responsive img-feature ${feature.inactive ? 'inactive' : ''}`} />
        <div key={`${key}_capt`} className="caption-fix caption text-center ">
             <h5 key={`${key}_name`}>{feature.name}</h5>
             <h6 key={`${key}_date`} className="text-muted"> {feature.date} </h6>
            <p key={`${key}_desc`}>{feature.desc}</p>
        </div>
    </div>
  </div>
);

const FeatureRow = ({row, key}) => (
  <div key={key} className="row row-centered">
    {row.map(feature => <Feature feature={feature} key={getId('feature')} />)}
  </div>
);

const Timeline = () => (
  <div id="timeline" className="bg-4  container">
    <div className="timeline">
      {featureRows.map(row => <FeatureRow row={row} key={getId('row')} />)}
    </div>
  </div>
);

export default Timeline;
