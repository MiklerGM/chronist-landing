import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import LocaleWidget from './LocaleWidget';

// smoke test. it rendering without warnings

it('locale widget with en without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LocaleWidget onChangeLanguage={e => console.log('dump func', e)} locale='en' />, div);
});

it('locale widget with ru without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LocaleWidget onChangeLanguage={e => console.log('dump func', e)} locale='ru' />, div);
});


// Snapshot tests
it('renders correctly', () => {
  const tree = renderer
    .create(<LocaleWidget onChangeLanguage={e => console.log('dump func', e)} locale='ru' />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
