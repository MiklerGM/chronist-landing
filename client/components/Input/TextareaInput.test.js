import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import IntlWrapper from '../../IntlWrapper';
import TextareaInput from './TextareaInput';

const TestComponent = () => (
  <IntlWrapper>
    <TextareaInput
      value=''
      name='email'
      cb={(e) => console.log('dumb func', e)}
      placeholder='contact.placeholder.email'
    />
  </IntlWrapper>
);

// it must render
it('TextareaInput render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestComponent />, div);
});

it('TextareaInput render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestComponent />, div);
});

// Snapshot tests
it('TextareaInput Snapshot', () => {
  const tree = renderer
    .create(<TestComponent />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
