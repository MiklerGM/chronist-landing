import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import './Title.less';

const TitleImageRu = require('./logo-grey-ru.svg').default;
const TitleImageEn = require('./logo-grey-en.svg').default;

const Title = ({ locale }) => {
  const TitleImage = (locale === 'ru') ? TitleImageRu : TitleImageEn;
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

Title.propTypes = {
  locale: PropTypes.string.isRequired
};

export default Title;
