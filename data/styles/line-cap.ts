import { Style } from 'geostyler-style';

const lineSimpleline: Style = {
  name: 'simpleline',
  rules: [
    {
      name: '',
      symbolizers: [
        {
          kind: 'Line',
          cap: 'butt'
        }
      ]
    },
    {
      name: '',
      symbolizers: [
        {
          kind: 'Line',
          cap: 'round'
        }
      ]
    },
    {
      name: '',
      symbolizers: [
        {
          kind: 'Line',
          cap: 'square'
        }
      ]
    }
  ]
};

export default lineSimpleline;
