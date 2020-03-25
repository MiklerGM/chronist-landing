import React from 'react';
import { FormattedMessage } from 'react-intl';

import './Company.less';

import dataRU from './data/TeamDataRU';
import dataEN from './data/TeamDataEN';

const Person = ({ person }) => (
  <div className='person--data'>
    <img src={person.img} alt={person.name} />
    <p>
      <strong>
        {person.name}
      </strong>
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
    let data = {};
    if (this.props.locale === 'ru') {
      data = dataRU;
    } else {
      data = dataEN;
    }

    return (
      <div id='team' className='page--segment'>
        <div className='page--content'>
          <h2 className='invert'>
            <span><FormattedMessage id='team.title' /></span>
          </h2>
          <div className='person--list'>
            {data.map((person) => <Person person={person} key={`personkey_${person.id}`} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
