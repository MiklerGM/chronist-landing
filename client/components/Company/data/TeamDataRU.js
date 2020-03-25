const ph1 = require('./photo1.jpg').default;
const ph2 = require('./photo2.jpg').default;
const ph3 = require('./photo3.jpg').default;
const ph4 = require('./photo4.jpg').default;
const ph5 = require('./photo5.jpg').default;


const data = [
  {
    id: 0,
    name: 'Даниил',
    position: 'Анализ Данных',
    img: ph1,
    link: 'data@chronist.ru'
  },
  {
    id: 1,
    name: 'Алиса',
    position: 'Стратегическое управление',
    img: ph2,
    link: 'idea@chronist.ru'
  },
  {
    id: 2,
    name: 'Михаил',
    position: 'Разработка',
    img: ph3,
    link: 'code@chronist.ru'
  },
  {
    id: 3,
    name: 'Валерия',
    position: 'Дизайн и иллюстрации',
    img: ph4,
    link: ''
  },
  {
    id: 4,
    name: 'Дмитрий',
    position: 'Разработка',
    img: ph5,
    link: ''
  },
];

export default data;
