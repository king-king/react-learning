let config = require('./webpack.config');
const path = require('path');

console.log(JSON.stringify(config));

config.devServer = {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    color: true
};

module.exports = config;
