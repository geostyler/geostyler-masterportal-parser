import { Style } from 'geostyler-style';

const lineSimpleline: Style = {
  name: 'simpleline',
  rules: [
    {
      name: '',
      symbolizers: [
        {
          kind: 'Line',
          color: '#c5db6e',
          width: 1
        }
      ]
    }
  ]
};

export default lineSimpleline;
