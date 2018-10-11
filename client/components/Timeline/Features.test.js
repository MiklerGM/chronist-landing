import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import IntlWrapper from '../../IntlWrapper';
import Features from './Features';

const TestComponent = () => (
  <IntlWrapper>
    <Features
      locale='ru'
    />
  </IntlWrapper>
);

// it must render
it('Features render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestComponent />, div);
});

it('Features render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestComponent />, div);
});

// Snapshot tests
it('Features Snapshot', () => {
  const tree = renderer
    .create(<TestComponent />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
