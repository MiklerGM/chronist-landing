import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import IntlWrapper from '../../IntlWrapper';
import Title from './Title';

const TestComponent = () => (
  <IntlWrapper>
    <Title locale='en' />
  </IntlWrapper>
);

// it must render
it('Title render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestComponent />, div);
});

it('Title render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestComponent />, div);
});

// Snapshot tests
it('Title Snapshot', () => {
  const tree = renderer
    .create(<TestComponent />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
