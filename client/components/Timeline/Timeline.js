import React from 'react';

import './timeline.less';

const ft1 = require('../../images/feature-borders.svg').default;
const ft2 = require('../../images/feature-war.svg').default;
const ft3 = require('../../images/feature-invention.svg').default;
const ft4 = require('../../images/feature-research.svg').default;
const ft5 = require('../../images/feature-demography.svg').default;
const ft6 = require('../../images/feature-language.svg').default;
const ft7 = require('../../images/feature-settings.svg').default;
const ft8 = require('../../images/feature-export.svg').default;
const ft9 = require('../../images/feature-religion.svg').default;
const ft10 = require('../../images/feature-nations.svg').default;
const ft11 = require('../../images/feature-disaster.svg').default;
const ft12 = require('../../images/feature-empty.svg').default;

const featureList = [
  {
    id: 0,
    name: 'Политические границы',
    date: 'Март 2017',
    desc: 'Изменения политических границ от античности до наших дней',
    img: ft1,
    inactive: 0,
    offset: 0
  },
  {
    id: 1,
    name: 'Изобретения',
    date: 'Март 2017',
    desc: 'Хронология развития современного общества',
    img: ft3,
    inactive: 0,
    offset: 0
  },
  {
    id: 2,
    name: 'Исследование данных',
    date: 'Март 2017',
    desc: 'Поиск корреляций и причинно-следственных связей между историческими событиями',
    img: ft4,
    inactive: 0,
    offset: 0
  },
  {
    id: 3,
    name: 'Экспорт данных',
    date: 'Сентябрь 2017',
    desc: 'Возможность экспортировать выбранную хронологию за период',
    img: ft8,
    inactive: 0,
    offset: 0
  },
  {
    id: 4,
    name: 'Личные сценарии',
    date: 'Сентябрь 2017',
    desc: 'Добавление данных и создание собственных наборов отображаемых событий',
    img: ft7,
    inactive: 0,
    offset: 0
  },
  {
    id: 5,
    name: 'Географические открытия и войны',
    date: 'Май 2018',
    desc: 'Интерактивное отображение военных действий и исследовательских походов',
    img: ft2,
    inactive: 1,
    offset: 0
  },
  {
    id: 6,
    name: 'Население',
    date: 'Май 2018',
    desc: 'Демографические изменения',
    img: ft5,
    inactive: 1,
    offset: 0
  },
  {
    id: 7,
    name: 'Религии',
    date: 'Май 2018',
    desc: 'Распространение религиозных течений',
    img: ft9,
    inactive: 1,
    offset: 0
  },
  {
    id: 8,
    name: 'Языки',
    date: 'Ноябрь 2018',
    desc: 'Распространение и эволюция языковых групп',
    img: ft6,
    inactive: 1,
    offset: 0
  },
  {
    id: 9,
    name: 'Нации',
    date: 'Ноябрь 2018',
    desc: 'Происхождение и распределение расс по материкам',
    img: ft10,
    inactive: 1,
    offset: 0
  },
  {
    id: 10,
    name: 'Катастрофы',
    date: 'Ноябрь 2018',
    desc: 'Болезни, природные и техногенные катаклизмы на протяжении истории человечества',
    img: ft11,
    inactive: 1,
    offset: 0
  },
  {
    id: 11,
    name: '',
    date: '',
    desc: '',
    img: ft12,
    inactive: 1,
    offset: 0
  },
];

const featureRows = [
  [...featureList.slice(0, 4)],
  [...featureList.slice(4, 8)],
  [...featureList.slice(8, 12)]
];

let ids = { row: 0, feature: 0 };
const getId = (type) => {
  const id = ids[type];
  ids[type] = ids[type] + 1;
  return `${type}_${id}`;
};

const Feature = ({ feature, gkey }) => (
  <div key={feature.id} className={`col-md-3 col-sm-3 ${`feature_${feature.id}`} ${feature.offset ? 'col-md-offset-1' : ''}`}>
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

class Timeline extends React.Component {
  componentDidMount() {
    ids = { row: 0, feature: 0 };
  }
  render() {
    return (
      <div id="timeline" className="row">
        <div className="timeline bg-4">
          <div className='container'>
            {featureRows.map(processRow)}
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Timeline;
