import {
  ReadStyleResult,
  Style,
  StyleParser,
  WriteStyleResult
} from 'geostyler-style';

type MpStyle = {[key: string]: any};

export class MasterportalStyleParser implements StyleParser<MpStyle> {

  // looks like there's no way to access static properties from an instance
  // without a reference to the constructor function, so we have to duplicate
  // the title here
  public static title = 'Masterportal';
  public title = 'Masterportal';

  unsupportedProperties = {};

  /**
   * The readStyle implementation of the GeoStyler-Style StylerParser interface.
   * It reads a Masterportal Style and returns a Promise resolving with a GeoStylerStyle-ReadStyleResult.
   *
   * @param masterportalStyle The Masterportal Style object
   * @return The Promise resolving with a GeoStylerStyle-ReadStyleResult
   */
  readStyle(masterportalStyle: MpStyle): Promise<ReadStyleResult> {
    return new Promise<ReadStyleResult>(async resolve => {
      try {
        resolve({});
      } catch (e) {
        resolve({
          errors: [e]
        });
      }
    });
  }

  /**
   * The writeStyle implementation of the GeoStyler-Style StyleParser interface.
   * It reads a GeoStyler-Style Style and returns a Promise.
   *
   * @param geoStylerStyle A GeoStylerStyle-Style
   * @return The Promise resolving with a GeoStylerStyle-WriteStyleResult
   */
  writeStyle(geoStylerStyle: Style): Promise<WriteStyleResult<MpStyle>> {
    return new Promise<WriteStyleResult<MpStyle>>(resolve => {
      try {
        resolve({});
      } catch (e) {
        resolve({
          errors: [e]
        });
      }
    });
  }
}

export default MasterportalStyleParser;
