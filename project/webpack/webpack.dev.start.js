const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');

const config = require('./webpack.config');

config.output.publicPath = 'http://localhost:8080/';
config.devtool = '#eval'; // 调试版要开启sourcemap
config.plugins.shift(); // 调试版不需要清空dist文件夹

// 开启文件监听
config.watch = true;
config.watchOptions = {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 10
};
// 开启显示id和名称的对应关系
config.plugins.push(new NamedModulesPlugin());

config.devServer = {
    inline: true,
    compress: true,
    hot: true,
    stats: {
        chunks: false,
        children: false,
        colors: true
    },
    historyApiFallback: true,
    port: 8080
};

module.exports = config;
