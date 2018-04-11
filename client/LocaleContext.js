import React from 'react';

import localeDataRU from './locales/ru.json';
import localeDataEN from './locales/en.json';

export const locales = {
  en: {
    language: 'en',
    messages: localeDataEN,
  },
  ru: {
    language: 'ru',
    messages: localeDataRU,
  }
};

const LocaleContext = React.createContext(locales.en);

export default LocaleContext;
