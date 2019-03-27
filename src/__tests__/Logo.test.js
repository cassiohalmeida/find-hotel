import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../components/Logo';
import ShallowRenderer from 'react-test-renderer/shallow';

it('should render an IMG tag', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Logo/>);
  const result = renderer.getRenderOutput();
  expect(result.type.target).toBe('img');
});
