const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config();

module.exports = (env, argv) => {
    const config = {
        context: path.resolve(__dirname, './src/desktop/entry'),
        entry: {
            index: {
                import: './index.js',
                filename: 'js/[name].js'
            },
            about: {
                import: './about.js',
                filename: 'js/[name].js'
            }
        },
        output: {
            path: path.resolve(__dirname, 'dist/desktop-site'),
            clean: true,
            assetModuleFilename: 'images/[hash][ext][query]'
        },
        module: {
            rules: [
                {
                    test: /\.ejs$/i,
                    use: ['html-loader', 'template-ejs-loader']
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader', 'postcss-loader'],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: '../template/page/index/index.ejs',
                filename: 'index.html',
                chunks: ['index'],
                hash: true,
                minify: {
                    collapseWhitespace: true
                }
            }),
            new HtmlWebpackPlugin({
                template: '../template/page/about/index.ejs',
                filename: 'about.html',
                chunks: ['about'],
                hash: true,
                minify: {
                    collapseWhitespace: true
                }
            }),
        ],
    };

    if (argv.mode !== 'production') {
        config.mode = 'development';
        config.devtool = 'source-map';
        config.devServer = {
            static: './dist/desktop-site',
            port: 8081,
            setupExitSignals: true,
            compress: true
        };
    }

    return config;
};