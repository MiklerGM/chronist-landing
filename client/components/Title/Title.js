import React from 'react';
import { FormattedMessage } from 'react-intl';

// import './Title.less';
if (process.env.WEBPACK) {
  require('./Title.less');
}

const TitleImageRu = require('./logo-grey-ru.svg');
const TitleImageEn = require('./logo-grey-en.svg');

const Title = ({ locale }) => {
  let TitleImage = {};
  if (locale === 'ru') {
    TitleImage = TitleImageRu;
  } else {
    TitleImage = TitleImageEn;
  }
  return (
    <div id="title">
      <div className='text-center'>
        <img src={TitleImage} draggable="false" alt='Chronist logo' />
        <h4>
          <FormattedMessage
            id='home.title'
          />
        </h4>
      </div>
    </div>
  );
};

export default Title;
