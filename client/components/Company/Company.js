import React from 'react';
import Team from './Team';
if (process.env.WEBPACK) require('./Company.less');

const Company = () => (
  <div className='page'>
    <h1 className='page--title'>
      Команда
    </h1>
    <Team />
  </div>
);

export default Company;
