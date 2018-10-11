import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import IntlWrapper from '../../IntlWrapper';
import MailInput from './MailInput';

const TestComponent = () => (
  <IntlWrapper>
    <MailInput
      value=''
      name='email'
      cb={e => console.log('dumb func', e)}
      placeholder='contact.placeholder.email'
    />
  </IntlWrapper>
);

// it must render
it('MailInput render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestComponent />, div);
});

it('MailInput render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestComponent />, div);
});

// Snapshot tests
it('MailInput Snapshot', () => {
  const tree = renderer
    .create(<TestComponent />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
