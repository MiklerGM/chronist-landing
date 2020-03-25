import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import IntlWrapper from '../../IntlWrapper';
import Navigation from './Navigation';

const TestComponent = () => (
  <IntlWrapper>
    <Router>
      <Navigation
        locale='ru'
        onChangeLanguage={(e) => console.log('dumb func', e)}
      />
    </Router>
  </IntlWrapper>
);

// it must render
it('Navigation render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestComponent />, div);
});

it('Navigation render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestComponent />, div);
});

// Snapshot tests
it('Navigation Snapshot', () => {
  const tree = renderer
    .create(<TestComponent />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
