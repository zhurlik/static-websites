const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config();

module.exports = (env, argv) => {
    const config = {
        context: path.resolve(__dirname, './src/mobile/entry'),
        entry: {
            index: {
                import: './index.js',
                filename: 'js/pages/[name]-[fullhash].js'
            },
            about: {
                import: './about.js',
                filename: 'js/pages/[name]-[fullhash].js'
            }
        },
        output: {
            path: path.resolve(__dirname, 'dist/mobile-site'),
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.ejs$/i,
                    use: ['html-loader', 'template-ejs-loader']
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: '../template/page/index/index.ejs',
                filename: 'index.html',
                chunks: ['index'],
            }),
            new HtmlWebpackPlugin({
                template: '../template/page/about/index.ejs',
                filename: 'about.html',
                chunks: ['about'],
            }),
        ],
    };

    if (argv.mode !== 'production') {
        config.mode = 'development';
        config.devtool = 'source-map';
    }

    return config;
};