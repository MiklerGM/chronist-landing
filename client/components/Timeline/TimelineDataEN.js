const ft1 = require('./data/feature-borders.svg');
const ft2 = require('./data/feature-war.svg');
const ft3 = require('./data/feature-invention.svg');
const ft4 = require('./data/feature-research.svg');
const ft5 = require('./data/feature-demography.svg');
const ft6 = require('./data/feature-language.svg');
const ft7 = require('./data/feature-settings.svg');
const ft8 = require('./data/feature-export.svg');
const ft9 = require('./data/feature-religion.svg');
const ft10 = require('./data/feature-nations.svg');
const ft11 = require('./data/feature-disaster.svg');
const ft12 = require('./data/feature-expedition.svg');

const pic0 = require('./data/preview-greymapsimple.png');
const pic1 = require('./data/preview-worldmapsimple.png');
const pic2 = require('./data/preview-inventionmapsimple.png');
const pic3 = require('./data/preview-exportmap.png');
const pic4 = require('./data/preview-researchmap.png');
const pic5 = require('./data/preview-storytellingmap.png');
// const pic3 = require('./data/export2.png');
const pic6 = require('./data/preview-warmapsimple.png');
const pic7 = require('./data/preview-populationmapsimple.png');
const pic8 = require('./data/preview-religionmapsimple.png');
const pic9 = require('./data/preview-languagemapsimple.png');
const pic10 = require('./data/preview-racemapsimple.png');
const pic11 = require('./data/preview-accidentmapsimple.png');
const pic12 = require('./data/preview-expeditionmapsimple.png');



const featureList = [
  {
    id: 0,
    name: 'Political borders',
    date: 'March 2017',
    desc: 'Explore borders change from antique till modern world',
    img: ft1,
    pic: pic1,
    inactive: 0,
    offset: 0
  },
  {
    id: 1,
    name: 'Inventions',
    date: 'March 2017',
    desc: 'Developments of modern society',
    img: ft3,
    pic: pic2,
    inactive: 0,
    offset: 0
  },
  {
    id: 2,
    name: 'Data explore',
    date: 'March 2017',
    desc: 'Interactive courses about specific places and dates',
    img: ft4,
    pic: pic4,
    inactive: 0,
    offset: 0
  },
  {
    id: 3,
    name: 'Export',
    date: 'September 2017',
    desc: 'Export specific data during chosen time',
    img: ft8,
    pic: pic3,
    inactive: 0,
    offset: 0
  },
  {
    id: 4,
    name: 'Script',
    date: 'September 2017',
    desc: 'Add data about local historical events',
    img: ft7,
    pic: pic5,
    inactive: 0,
    offset: 0
  },
  {
    id: 5,
    name: 'Wars',
    date: 'May 2018',
    desc: 'Conquest and battles',
    img: ft2,
    pic: pic6,
    inactive: 1,
    offset: 0
  },
  {
    id: 6,
    name: 'Demographics',
    date: 'May 2018',
    desc: 'People migrations and population',
    img: ft5,
    pic: pic7,
    inactive: 1,
    offset: 0
  },
  {
    id: 7,
    name: 'Religion',
    date: 'May 2018',
    desc: 'Growth and spread of religions',
    img: ft9,
    pic: pic8,
    inactive: 1,
    offset: 0
  },
  {
    id: 8,
    name: 'Languages',
    date: 'November 2018',
    desc: 'Language families and branches',
    img: ft6,
    pic: pic9,
    inactive: 1,
    offset: 0
  },
  {
    id: 9,
    name: 'Nations',
    date: 'November 2018',
    desc: 'Evolution of nations',
    img: ft10,
    pic: pic10,
    inactive: 1,
    offset: 0
  },
  {
    id: 10,
    name: 'Natural disasters',
    date: 'November 2018',
    desc: 'Diseases, disasters and catastrophes during world history',
    img: ft11,
    pic: pic11,
    inactive: 1,
    offset: 0
  },
  {
    id: 11,
    name: 'Expeditions',
    date: 'November 2018',
    desc: 'Explorations and geographical discoveries',
    img: ft12,
    pic: pic12,
    inactive: 1,
    offset: 0
  },
];

export default featureList;
