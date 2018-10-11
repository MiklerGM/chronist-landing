import React from 'react';
import ReactDOM from 'react-dom';

import IntlWrapper from '../IntlWrapper';
import About from './About';

const TestComponent = () => (
  <IntlWrapper>
    <About />
  </IntlWrapper>
);

// it must render
it('About render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestComponent />, div);
});
