const ft1 = require('../../images/feature-borders.svg');
const ft2 = require('../../images/feature-war.svg');
const ft3 = require('../../images/feature-invention.svg');
const ft4 = require('../../images/feature-research.svg');
const ft5 = require('../../images/feature-demography.svg');
const ft6 = require('../../images/feature-language.svg');
const ft7 = require('../../images/feature-settings.svg');
const ft8 = require('../../images/feature-export.svg');
const ft9 = require('../../images/feature-religion.svg');
const ft10 = require('../../images/feature-nations.svg');
const ft11 = require('../../images/feature-disaster.svg');
const ft12 = require('./data/feature-expedition.svg');

const pic0 = require('./data/greymapsimple.png');
const pic1 = require('./data/worldmapsimple.png');
const pic2 = require('./data/inventionmapsimple.png');
const pic6 = require('./data/warmapsimple.png');
const pic7 = require('./data/populationmapsimple.png');
const pic8 = require('./data/religionmapsimple.png');
const pic9 = require('./data/languagemapsimple.png');
const pic10 = require('./data/racemapsimple.png');
const pic11 = require('./data/accidentmapsimple.png');
const pic12 = require('./data/expeditionmapsimple.png');

const featureList = [
  {
    id: 0,
    name: 'Политические границы',
    date: 'Март 2017',
    desc: 'Изменения политических границ от античности до наших дней',
    img: ft1,
    pic: pic1,
    inactive: 0,
    offset: 0
  },
  {
    id: 1,
    name: 'Изобретения',
    date: 'Март 2017',
    desc: 'Хронология развития современного общества',
    img: ft3,
    pic: pic2,
    inactive: 0,
    offset: 0
  },
  {
    id: 2,
    name: 'Исследование данных',
    date: 'Март 2017',
    desc: 'Поиск корреляций и причинно-следственных связей между историческими событиями',
    img: ft4,
    pic: pic0,
    inactive: 0,
    offset: 0
  },
  {
    id: 3,
    name: 'Экспорт данных',
    date: 'Сентябрь 2017',
    desc: 'Возможность экспортировать выбранную хронологию за период',
    img: ft8,
    pic: pic0,
    inactive: 0,
    offset: 0
  },
  {
    id: 4,
    name: 'Личные сценарии',
    date: 'Сентябрь 2017',
    desc: 'Добавление данных и создание собственных наборов отображаемых событий',
    img: ft7,
    pic: pic0,
    inactive: 0,
    offset: 0
  },
  {
    id: 5,
    name: 'Географические открытия и войны',
    date: 'Май 2018',
    desc: 'Интерактивное отображение военных действий и исследовательских походов',
    img: ft2,
    pic: pic6,
    inactive: 1,
    offset: 0
  },
  {
    id: 6,
    name: 'Население',
    date: 'Май 2018',
    desc: 'Демографические изменения',
    img: ft5,
    pic: pic7,
    inactive: 1,
    offset: 0
  },
  {
    id: 7,
    name: 'Религии',
    date: 'Май 2018',
    desc: 'Распространение религиозных течений',
    img: ft9,
    pic: pic8,
    inactive: 1,
    offset: 0
  },
  {
    id: 8,
    name: 'Языки',
    date: 'Ноябрь 2018',
    desc: 'Распространение и эволюция языковых групп',
    img: ft6,
    pic: pic9,
    inactive: 1,
    offset: 0
  },
  {
    id: 9,
    name: 'Нации',
    date: 'Ноябрь 2018',
    desc: 'Происхождение и распределение расс по материкам',
    img: ft10,
    pic: pic10,
    inactive: 1,
    offset: 0
  },
  {
    id: 10,
    name: 'Катастрофы',
    date: 'Ноябрь 2018',
    desc: 'Болезни, природные и техногенные катаклизмы на протяжении истории человечества',
    img: ft11,
    pic: pic11,
    inactive: 1,
    offset: 0
  },
  {
    id: 11,
    name: 'Экспедиции',
    date: 'Ноябрь 2018',
    desc: '',
    img: ft12,
    pic: pic12,
    inactive: 1,
    offset: 0
  },
];

export default featureList;
