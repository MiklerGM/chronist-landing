import React from 'react';
import './Company.less';
import data from './data/TeamData';

const Person = ({ person }) => (
  <div className='person--data'>
    <a href={person.link}>
      <img src={person.img} />
    </a>
    <p>
      <strong> {person.name} </strong>
    <br />
    {person.position}
    <br />
      <a href={`mailto://${person.link}`}>{person.link}</a>
    </p>
    <br />
  </div>
);

const Team = () => (
  <div id='team' className='page--content'>
    {data.map(person => <Person person={person} key={`personkey_${person.id}`} />)}
  </div>
);

export default Team;
