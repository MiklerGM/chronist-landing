import React from 'react';
import '../styles/timeline.less';

const ft1 = require('../images/feature-borders.svg');
const ft2 = require('../images/feature-war.svg');
const ft3 = require('../images/feature-invention.svg');
const ft4 = require('../images/feature-research.svg');
const ft5 = require('../images/feature-demography.svg');
const ft6 = require('../images/feature-language.svg');
const ft7 = require('../images/feature-settings.svg');
const ft8 = require('../images/feature-export.svg');
const ft9 = require('../images/feature-religion.svg');
const ft10 = require('../images/feature-nations.svg');
const ft11 = require('../images/feature-disaster.svg');
const ft12 = require('../images/feature-empty.svg');

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
];

const featureRows = [[...featureList.slice(0,4)],[...featureList.slice(4,8)],[...featureList.slice(8,12)]];

let ids = { row: 0, feature:0 };
const getId = (type) => {
  const id = ids[type];
  ids[type] = ids[type] + 1;
  return `${type}_${id}`;
};

const Feature = ({ feature, gkey }) => (
  <div key={gkey} className={`col-md-3 col-sm-3 ${feature.offset ? 'col-md-offset-1' : ''}`}>
    <div key={`${gkey}_thumb`} className="thumbnail timeline-tmb">
      <img key={`${gkey}_img`} src={feature.img} alt="ALT NAME" className={`img-responsive img-feature ${feature.inactive ? 'inactive' : ''}`} />
      <div key={`${gkey}_capt`} className="caption-fix caption text-center ">
        <h5 key={`${gkey}_name`}>{feature.name}</h5>
        <h6 key={`${gkey}_date`} className="text-muted"> {feature.date} </h6>
        <p key={`${gkey}_desc`}>{feature.desc}</p>
      </div>
    </div>
  </div>
);

const FeatureRow = ({ row, gkey }) => (
  <div key={gkey} className="row row-centered">
    {row.map(feature => <Feature feature={feature} key={`f_${ids.feature}`} gkey={getId('feature')} />)}
  </div>
);

const processRow = (row) => {
  return <FeatureRow row={row} key={`r_${ids.row}`} gkey={getId('row')} />;
};

const Timeline = () => (
  <div id="timeline" className="row">
    <div className="timeline bg-4  container">
      {featureRows.map(processRow)}
    </div>
  </div>
);

export default Timeline;
