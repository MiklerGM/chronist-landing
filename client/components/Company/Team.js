import React from 'react';
import './Company.less';
import data from './data/TeamData';

const Company = () => (
  <div className='page'>
    <h1 className='page--title'>
      Команда
    </h1>
    <Team />
  </div>
);

const Person = ({ person }) => (
  <div className='person--data'>
    <a href={person.link}>
      <img src={person.img} />
    </a>
    <br />
    <p>
      <strong> {person.name} </strong>
    <br />
    {person.position}
    </p>
  </div>
);

const Team = () => (
  <div className='page--content'>
    {data.map(person => <Person person={person} key={`personkey_${person.id}`} />)}
  </div>
);

export default Company;
