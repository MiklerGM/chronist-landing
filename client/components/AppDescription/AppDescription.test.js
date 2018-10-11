import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import IntlWrapper from '../../IntlWrapper';
import AppDescription from './AppDescription';

const TestComponent = () => (
  <IntlWrapper>
    <AppDescription />
  </IntlWrapper>
);

// it must render
it('AppDescription render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestComponent />, div);
});

it('AppDescription render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestComponent />, div);
});
