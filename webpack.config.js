const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        index: path.resolve(__dirname, './web-pack-v/app/main.jsx')
    },
    output: {
        path: path.resolve(__dirname, './web-pack-v/build'),
        filename: 'bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin('web-pack-v/build/*', {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new htmlWebpackPlugin({
            //模板为同级目录下的index.html，为何不用写路径，是因为默认上下文问webpack.config.js所在的文件夹
            template: 'web-pack-v/index.html',
            //自动生成HTML文件的名字,可以嵌套文件夹
            filename: 'index.html',
            chunks: ['index']
        }),
        new ExtractTextPlugin({
            filename: "[name]_[contenthash:8].css"
        })
    ],
    module: {
        //loaders加载器
        loaders: [{
            test: /\.s?css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader"]
            })
        }, {
            test: /\.(js|jsx)$/, //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
            exclude: /node_modules/, //屏蔽不需要处理的文件（文件夹）（可选）
            use: 'babel-loader' //loader的名称（必须）
        }]
    }

};