const path = require('path');
const fs = require('fs');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production'; // 是否是发布版

let entries = {
    libs: ['react', 'react-dom', 'redux', 'react-redux', 'redux-thunk', 'axios', 'prop-types']
};

module.exports = {
    entry: entries,
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: `static/js/[name]${isProduction?'[chunkhash:10]':''}.js`,
        // 用于设定css中引用img的路径
        publicPath: "/dist/"
    },
    plugins: getPlugins(),
    module: {
        //loaders加载器
        loaders: [
            // loader
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", 'sass-loader']
                })
            }, {
                test: /\.(js|jsx)$/, //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/, //屏蔽不需要处理的文件（文件夹）（可选）
                use: 'babel-loader' //loader的名称（必须）
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'static/img/[name].[ext]'
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss', '.css']
    }
};

// 组装插件
function getPlugins() {
    let plugins = [
        new CleanWebpackPlugin('dist/*', {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "libs"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest"
        })
    ];
    // 处理html
    fs.readdirSync('src/static/js').filter((dirName) => {
        return dirName !== 'lib' && dirName !== 'util';
    }).forEach(chunk => {
        entries[chunk] = path.resolve(__dirname, './src/static/js', chunk, 'main.jsx');
        plugins.push(
            new htmlWebpackPlugin({
                //模板为同级目录下的index.html，为何不用写路径，是因为默认上下文问webpack.config.js所在的文件夹
                template: `src/view/${chunk}.html/`,
                //自动生成HTML文件的名字,可以嵌套文件夹
                filename: `view/${chunk}.html`,
                chunks: ['manifest', 'libs', chunk]
            })
        );
    });
    plugins.push(
        new ExtractTextPlugin({
            filename: `static/style/[name]${isProduction?'_[contenthash:10]':''}.css`
        })
    );
    isProduction && plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: false
        })
    );
    return plugins;
}
