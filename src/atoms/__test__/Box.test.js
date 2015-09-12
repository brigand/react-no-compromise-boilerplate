import React from 'react';
import {createRenderer} from 'react-addons-test-utils';
import jsxEquals from 'jsx-equals';
import Box from '../Box';

describe('atoms/Box', () => {
  let renderer;
  beforeEach(() => {
    renderer = createRenderer();
  });

  it('works', () => {
    renderer.render(<Box />);
    jsxEquals(renderer.getRenderOutput(),
      <span className="BoxAtom BoxAtom--column BoxAtom--block" />
    )
  });
});
