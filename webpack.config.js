var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './web-pack-v/app/main.jsx'),
    output: {
        path: path.resolve(__dirname, './web-pack-v/build'),
        filename: 'bundle.js',
    }
};