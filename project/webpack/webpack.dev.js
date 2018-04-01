let config = require('./webpack.config');
const path = require('path');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const NameModulesPlugin = require('webpack/lib/NameModulesPlugin');

config.output.publicPath = 'http://localhost:9000/';
config.devtool = "#eval"; // 调试版要开启sourcemap
config.plugins.shift(); // 调试版不需要清空dist文件夹

// 开启文件监听
config.watch = true;
config.watchOptions = {
    ignore: /node_modules/,
    aggregateTimeout: 300,
    poll: 10
};
// 开启显示id和名称的对应关系
config.plugins.push(new NameModulesPlugin());

const compiler = webpack(config);
const devServer = new WebpackDevServer(compiler, {
    inline: true,
    compress: true,
    hot: true,
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
