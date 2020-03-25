import React from 'react';
import ReactDOM from 'react-dom';

const TestComponent = () => (
  <p>TODO</p>
);

// it must render
it('ArticleGallery test in TODO', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestComponent />, div);
});

// it('ArticleGallery render without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<TestComponent />, div);
// });

// // Snapshot tests
// it('ArticleGallery Snapshot', () => {
//   const tree = renderer
//     .create(<TestComponent />)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

// require.context is messing this test
