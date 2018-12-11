const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname,
        filename: 'build/main.js',
        libraryTarget: 'commonjs2',
    },
    devtool: 'none', // prevent webpack from using eval() on my module
    externals: {
        uxp: 'uxp',
        scenegraph: 'scenegraph',
        commands: 'commands',
        clipboard: 'clipboard',
    },
    plugins: [new CopyWebpackPlugin([
        { from: 'static', to: 'build/', toType: 'dir' },
    ], { debug: 'debug' })],
    module: {
        rules: [],
    },
};
