import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

import IntlWrapper from '../../IntlWrapper';
import Team from './Team';

const TestComponent = () => (
  <IntlWrapper>
    <Router>
      <Team onChangeLanguage={(e) => console.log('dump func', e)} locale='en' />
    </Router>
  </IntlWrapper>
);

// it must render
it('Team render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestComponent />, div);
});

it('Team render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestComponent />, div);
});

// Snapshot tests
it('Team Snapshot', () => {
  const tree = renderer
    .create(<TestComponent />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
