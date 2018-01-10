import React from 'react';
if (process.env.WEBPACK) require('./Company.less');
import data from './data/TeamData';

const Person = ({ person }) => (
  <div className='person--data'>
    <img src={person.img} />
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

class Team extends React.Component {
  render() {
    return (
      <div id='team' className='page--content'>
        {data.map(person => <Person person={person} key={`personkey_${person.id}`} />)}
      </div>
    );
  }
}

export default Team;
