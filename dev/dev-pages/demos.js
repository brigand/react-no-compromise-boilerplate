export default {
  Box: [
    require('../../src/atoms/Box'),
    {children: ['A', 'B']},
    {direction: 'row', children: ['A', 'B']},
    {margin: '0.5em', padding: '0.5em', children: ['A', 'B']},
  ],
  Checkbox: [
    require('../../src/atoms/Checkbox'),
    {on: true, children: 'Yes'},
    {on: false, children: 'No'},
    {on: false, children: 'Disabled', disabled: true},
  ],
  TextInput: [
    require('../../src/atoms/TextInput'),
    {value: ''},
    {value: '', placeholder: 'Placeholder...'},
    {value: 'test', type: 'password'},
    {value: 'test', label: 'Label'},
    {value: 'test', label: 'Label', direction: 'column'},
  ],
  Button: [
    require('../../src/atoms/Button'),
    {children: 'Default'},
    {children: 'Primary', which: 'primary'},
    {children: 'Secondary', which: 'secondary'},
  ],

};
