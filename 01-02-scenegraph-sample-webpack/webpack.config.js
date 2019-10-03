const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
    libraryTarget: 'commonjs2',
  },
  devtool: 'none', // prevent webpack from using eval() on my module
  externals: {
    application: 'application',
    assets: 'assets',
    clipboard: 'clipboard',
    cloud: 'cloud',
    commands: 'commands',
    interactions: 'interactions',
    scenegraph: 'scenegraph',
    uxp: 'uxp',
    viewport: 'viewport',
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'assets', to: './', toType: 'dir' }], {
      debug: 'debug',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                modules: 'commonjs',
                targets: {
                  node: 'current',
                },
              },
            ],
          ],
          plugins: [['@babel/plugin-transform-modules-commonjs']],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
