export default {
  Box: [
    require('../../src/atoms/Box'),
    {children: ['A', 'B']},
    {direction: 'row', children: ['A', 'B']},
    {margin: '0.5em', padding: '0.5em', children: ['A', 'B']},
  ],
};
