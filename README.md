# geostyler-masterportal-parser

[![Coverage Status](https://coveralls.io/repos/github/geostyler/geostyler-masterportal-parser/badge.svg?branch=main)](https://coveralls.io/github/geostyler/geostyler-masterportal-parser?branch=main)
[![License](https://img.shields.io/github/license/geostyler/geostyler-masterportal-parser)](https://github.com/geostyler/geostyler-masterportal-parser/blob/main/LICENSE)
[![npm version](https://badge.fury.io/js/geostyler-masterportal-parser.svg)](https://www.npmjs.com/package/geostyler-masterportal-parser)

GeoStyler-Style-Parser implementation for Masterportal Styles

### How to use

ES6:
```js
import MasterportalParser from "geostyler-masterportal-parser";

const pointSimplePoint = {
  name: "My Style",
  rules: [
    {
      name: "My Rule",
      symbolizers: [
        {
          kind: "Mark",
          wellKnownName: "circle",
          color: "#FF0000",
          radius: 6
        }
      ]
    }
  ]
};

const parser = new MasterportalParser();

const { output: mpStyle } = await parser.writeStyle(pointSimplePoint);
console.log(mpStyle);
```

Browser:

```js
const pointSimplePoint = {
  name: "My Style",
  rules: [
    {
      name: "My Rule",
      symbolizers: [
        {
          kind: "Mark",
          wellKnownName: "Circle",
          color: "#FF0000",
          radius: 6
        }
      ]
    }
  ]
};
var parser = new GeoStylerMasterportalParser.MasterportalStyleParser();
parser
  .writeStyle(pointSimplePoint)
  .then(function(res) {
    var mpStyle = res.output;
    console.log(mpStyle);
  });
```

## <a name="funding"></a>Funding & financial sponsorship

Maintenance and further development of this code can be funded through the
[GeoStyler Open Collective](https://opencollective.com/geostyler). All contributions and
expenses can transparently be reviewed by anyone; you see what we use the donated money for.
Thank you for any financial support you give the GeoStyler project 💞
