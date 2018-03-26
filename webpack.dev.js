let config = require('./webpack.config');
const path = require('path');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');


config.output.publicPath = 'http://localhost:9000/';

const compiler = webpack(config);
const devServer = new WebpackDevServer(compiler, {
    inline: true,
    compress: true,
    stats: {
        chunks: false,
        children: false,
        colors: true
    },
    historyApiFallback: true,
});
console.log('new')
devServer.listen(9000, 'localhost', function () {
    console.log();
});