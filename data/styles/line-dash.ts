import { Style } from 'geostyler-style';

const lineSimpleline: Style = {
  name: 'simpleline',
  rules: [
    {
      name: '',
      symbolizers: [
        {
          kind: 'Line',
          dasharray: [1, 2]
        }
      ]
    }
  ]
};

export default lineSimpleline;
