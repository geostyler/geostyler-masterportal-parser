import MpStyleParser from './MasterportalStyleParser';

import lineSimpleline from '../data/styles/line-simpleline';
import mpLineSimpleline from '../data/masterportal/line-simpleline';
import lineJoin from '../data/styles/line-join';
import mpLineJoin from '../data/masterportal/line-join';
import lineCap from '../data/styles/line-cap';
import mpLineCap from '../data/masterportal/line-cap';
import lineDash from '../data/styles/line-dash';
import mpLineDash from '../data/masterportal/line-dash';

it('MasterportalStyleParser is defined', () => {
  expect(MpStyleParser).toBeDefined();
});

describe('MasterportalStyleParser implements StyleParser', () => {

  describe('#readStyle', () => {

  });

  describe('#writeStyle', () => {
    it('is defined', () => {
      const mpStyleParser = new MpStyleParser();
      expect(mpStyleParser.writeStyle).toBeDefined();
    });
    it('writes a simple linesymbolizer', async () => {
      const mpStyleParser = new MpStyleParser();
      const {output: mpStyle} = await mpStyleParser.writeStyle(lineSimpleline);
      expect(mpStyle).toEqual(mpLineSimpleline);
    });
    it('writes a linesymbolizer with join', async () => {
      const mpStyleParser = new MpStyleParser();
      const {output: mpStyle} = await mpStyleParser.writeStyle(lineJoin);
      expect(mpStyle).toEqual(mpLineJoin);
    });
    it('writes a linesymbolizer with cap', async () => {
      const mpStyleParser = new MpStyleParser();
      const {output: mpStyle} = await mpStyleParser.writeStyle(lineCap);
      expect(mpStyle).toEqual(mpLineCap);
    });
    it('writes a linesymbolizer with dasharray', async () => {
      const mpStyleParser = new MpStyleParser();
      const {output: mpStyle} = await mpStyleParser.writeStyle(lineDash);
      expect(mpStyle).toEqual(mpLineDash);
    });
  });
});
