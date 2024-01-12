const TerserPlugin = require('terser-webpack-plugin');
require("@babel/polyfill");

module.exports = {
  entry: [
    "@babel/polyfill",
    "./src/MasterportalStyleParser.ts"
  ],
  mode: 'production',
  output: {
    filename: "masterportalStyleParser.js",
    path: __dirname + "/browser",
    library: "GeoStylerMasterportalParser"
  },
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  optimization: {
    minimizer: [
      new TerserPlugin()
    ]
  },
  module: {
    rules: [
      // All files with a '.ts'
      {
        test: /\.ts$/,
        include: __dirname + '/src',
        use: [
          {
            loader: require.resolve('ts-loader'),
          },
        ],
      }
    ]
  }
};
