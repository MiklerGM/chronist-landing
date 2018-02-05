import React from 'react';
if (process.env.WEBPACK) require('./Company.less');
import {FormattedMessage} from 'react-intl';
import dataRU from './data/TeamDataRU';
import dataEN from './data/TeamDataEN';

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
    let data = {};
    if( this.props.locale === 'ru') {
      data = dataRU;
    } else {
      data = dataEN;
    }

    return (
      <div id='team' className='page--segment'>
        <div className='page--content'>
          <h2 className='invert'>
            <FormattedMessage
              id='team.title'
              defaultMessage={`Default message`}
            />
          </h2>
          {data.map(person => <Person person={person} key={`personkey_${person.id}`} />)}
        </div>
      </div>
    );
  }
}

export default Team;
