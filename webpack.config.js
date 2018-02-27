var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: path.resolve(__dirname, './web-pack-v/app/main.js'),
    output: {
        path: path.resolve(__dirname, './web-pack-v/build'),
        filename: 'bundle.js',
    },

    module: {
        //loaders加载器
        loaders: [
            {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel'//loader的名称（必须）
            }
        ]
    }

};