import {
  LineSymbolizer,
  ReadStyleResult,
  Rule,
  Style,
  StyleParser,
  Symbolizer,
  WriteStyleResult,
  isGeoStylerFunction
} from 'geostyler-style';
import { hexToRgba } from './Util/MpUtil';

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
        const mpStyle: MpStyle = this.geoStylerStyleToMpStyle(geoStylerStyle);
        resolve({
          output: mpStyle
        });
      } catch (e) {
        resolve({
          errors: [e]
        });
      }
    });
  }

  geoStylerStyleToMpStyle(geoStylerStyle: Style): MpStyle {
    const styleId = geoStylerStyle.name || '';
    const mpStyle: MpStyle = {
      styleId,
      rules: geoStylerStyle.rules.map(rule => this.geoStylerRuleToMpRule(rule))
    };

    return mpStyle;
  }

  geoStylerRuleToMpRule(rule: Rule): any {
    const style = this.geoStylerSymbolizersToMpRuleStyle(rule.symbolizers);
    const mpRule = {
      style
    };
    return mpRule;
  }

  geoStylerSymbolizersToMpRuleStyle(symbolizers: Symbolizer[]): any {
    const mpRuleStyles = symbolizers.map(symbolizer => this.geoStylerSymbolizerToMpRuleStyle(symbolizer));
    const mpRuleStyle = mpRuleStyles.reduce((prev, cur) => ({...prev, ...cur}), {});
    return mpRuleStyle;
  }

  geoStylerSymbolizerToMpRuleStyle(symbolizer: Symbolizer): any {
    switch (symbolizer.kind) {
      case 'Line':
        return this.geoStylerLineSymbolizerToMpLineStyle(symbolizer);
      default:
        return {};
    }
  }

  geoStylerLineSymbolizerToMpLineStyle(symbolizer: LineSymbolizer): any {
    const {
      cap,
      color,
      dasharray,
      join,
      width
    } = symbolizer;
    const mpLineStyle: any = {};
    if (color !== undefined && !isGeoStylerFunction(color)) {
      mpLineStyle.lineStrokeColor = hexToRgba(color, 1);
    }
    if (width !== undefined && !isGeoStylerFunction(width)) {
      mpLineStyle.lineStrokeWidth = width;
    }
    if (join !== undefined && !isGeoStylerFunction(join)) {
      mpLineStyle.lineStrokeJoin = join;
    }
    if (cap !== undefined && !isGeoStylerFunction(cap)) {
      mpLineStyle.lineStrokeCap = cap;
    }
    if (dasharray !== undefined && !isGeoStylerFunction(dasharray)) {
      mpLineStyle.lineStrokeDash = [...dasharray];
    }
    return mpLineStyle;
  }
}

export default MasterportalStyleParser;
