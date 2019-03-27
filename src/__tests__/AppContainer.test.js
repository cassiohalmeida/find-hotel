import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from '../components/AppContainer';
import ShallowRenderer from 'react-test-renderer/shallow';

it('should render all children components', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<AppContainer/>);
  const result = renderer.getRenderOutput();
  expect(result.props).toHaveProperty('children');
});
