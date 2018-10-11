import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import IntlWrapper from '../../IntlWrapper';
import TextInput from './TextInput';

const TestComponent = () => (
  <IntlWrapper>
    <TextInput
      value=''
      name='email'
      cb={e => console.log('dumb func', e)}
      placeholder='contact.placeholder.email'
    />
  </IntlWrapper>
);

// it must render
it('TextInput render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestComponent />, div);
});

it('TextInput render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestComponent />, div);
});

// Snapshot tests
it('TextInput Snapshot', () => {
  const tree = renderer
    .create(<TestComponent />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
