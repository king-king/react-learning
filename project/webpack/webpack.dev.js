let config = require('./webpack.config');
const path = require('path');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');


config.output.publicPath = 'http://localhost:9000/';
config.devtool = "#eval"; // 调试版要开启sourcemap
config.plugins.shift(); // 调试版不需要清空dist文件夹

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
devServer.listen(9000, 'localhost', function () {
    console.log();
});
