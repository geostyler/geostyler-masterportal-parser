import { Style } from 'geostyler-style';

const lineSimpleline: Style = {
  name: 'simpleline',
  rules: [
    {
      name: '',
      symbolizers: [
        {
          kind: 'Line',
          join: 'bevel'
        }
      ]
    },
    {
      name: '',
      symbolizers: [
        {
          kind: 'Line',
          join: 'round'
        }
      ]
    },
    {
      name: '',
      symbolizers: [
        {
          kind: 'Line',
          join: 'miter'
        }
      ]
    }
  ]
};

export default lineSimpleline;
