const path = require('path');
const fs = require('fs');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');


let entries = {
    libs: ['react', 'react-dom', 'redux', 'react-redux', 'axios']
};
let plugins = [
    new CleanWebpackPlugin('dist/*', {
        root: __dirname,
        verbose: true,
        dry: false
    }),
    new CommonsChunkPlugin({
        name: "libs"
    })
];
fs.readdirSync('src/static/js').filter((dirName) => {
    return dirName !== 'lib' && dirName !== 'util';
}).forEach(chunk => {
    entries[chunk] = path.resolve(__dirname, './src/static/js', chunk, 'index.jsx');
    plugins.push(
        new htmlWebpackPlugin({
            //模板为同级目录下的index.html，为何不用写路径，是因为默认上下文问webpack.config.js所在的文件夹
            template: `src/view/${chunk}.html/`,
            //自动生成HTML文件的名字,可以嵌套文件夹
            filename: `dist/view/${chunk}.html`,
            chunks: ['libs', chunk]
        })
    );
});

module.exports = {
    entry: entries,
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
    plugins: plugins.concat([
        new ExtractTextPlugin({
            filename: "[name].css"
        })
    ]),
    module: {
        //loaders加载器
        loaders: [{
            test: /\.s?css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", 'sass-loader']
            })
        }, {
            test: /\.(js|jsx)$/, //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
            exclude: /node_modules/, //屏蔽不需要处理的文件（文件夹）（可选）
            use: 'babel-loader' //loader的名称（必须）
        }]
    }

};
