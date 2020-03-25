const ph1 = require('./photo1.jpg').default;
const ph2 = require('./photo2.jpg').default;
const ph3 = require('./photo3.jpg').default;
const ph4 = require('./photo4.jpg').default;
const ph5 = require('./photo5.jpg').default;


const data = [
  {
    id: 0,
    name: 'Daniil',
    position: 'Data Engineering',
    img: ph1,
    link: 'data@chronist.ru'
  },
  {
    id: 1,
    name: 'Alisa',
    position: 'Product Owner',
    img: ph2,
    link: 'idea@chronist.ru'
  },
  {
    id: 2,
    name: 'Michael',
    position: 'Software Engineering',
    img: ph3,
    link: 'code@chronist.ru'
  },
  {
    id: 3,
    name: 'Valeria',
    position: 'Visual Design',
    img: ph4,
    link: ''
  },
  {
    id: 4,
    name: 'Dmitry',
    position: 'Frontend Engineering',
    img: ph5,
    link: ''
  },
];

export default data;
