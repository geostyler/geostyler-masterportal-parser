import { hexToRgba } from './MpUtil';

describe('MpUtil', () => {
  describe('hexToRgba', () => {
    it('converts a hex color to rgba', () => {
      const hex = '#ff0000';
      const alpha = 1;
      const rgba = hexToRgba(hex, alpha);
      expect(rgba).toEqual([255, 0, 0, 1]);
    });
    it('returns undefined for invalid hex', () => {
      const hex = '#ff00';
      const alpha = 1;
      const rgba = hexToRgba(hex, alpha);
      expect(rgba).toBeUndefined();
    });
  });
});
