const ft1 = require('./data/feature-borders.svg').default;
const ft2 = require('./data/feature-war.svg').default;
const ft3 = require('./data/feature-invention.svg').default;
const ft4 = require('./data/feature-research.svg').default;
const ft5 = require('./data/feature-demography.svg').default;
const ft6 = require('./data/feature-language.svg').default;
const ft7 = require('./data/feature-settings.svg').default;
const ft8 = require('./data/feature-export.svg').default;
const ft9 = require('./data/feature-religion.svg').default;
const ft10 = require('./data/feature-nations.svg').default;
const ft11 = require('./data/feature-disaster.svg').default;
const ft12 = require('./data/feature-expedition.svg').default;

const pic0 = require('./data/preview-greymapsimple.png').default;
const pic1 = require('./data/preview-worldmapsimple.png').default;
const pic2 = require('./data/preview-inventionmapsimple.png').default;
const pic3 = require('./data/preview-exportmap.png').default;
const pic4 = require('./data/preview-researchmap.png').default;
const pic5 = require('./data/preview-storytellingmap.png').default;
// const pic3 = require('./data/export2.png').default;
const pic6 = require('./data/preview-warmapsimple.png').default;
const pic7 = require('./data/preview-populationmapsimple.png').default;
const pic8 = require('./data/preview-religionmapsimple.png').default;
const pic9 = require('./data/preview-languagemapsimple.png').default;
const pic10 = require('./data/preview-racemapsimple.png').default;
const pic11 = require('./data/preview-accidentmapsimple.png').default;
const pic12 = require('./data/preview-expeditionmapsimple.png').default;



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
    pic: pic4,
    inactive: 0,
    offset: 0
  },
  {
    id: 3,
    name: 'Экспорт данных',
    date: 'Сентябрь 2017',
    desc: 'Возможность экспортировать выбранную хронологию за период',
    img: ft8,
    pic: pic3,
    inactive: 0,
    offset: 0
  },
  {
    id: 4,
    name: 'Личные сценарии',
    date: 'Сентябрь 2017',
    desc: 'Добавление данных и создание собственных наборов отображаемых событий',
    img: ft7,
    pic: pic5,
    inactive: 0,
    offset: 0
  },
  {
    id: 5,
    name: 'Войны',
    date: 'Май 2018',
    desc: 'Военные действия и завоевательные походы',
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
    desc: 'Распределение рас по материкам',
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
    desc: 'Интерактивное отображение исследовательских походов и географических открытий',
    img: ft12,
    pic: pic12,
    inactive: 1,
    offset: 0
  },
];

export default featureList;
