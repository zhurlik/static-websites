const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// import .env file
require('dotenv').config()

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
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Index page.',
                filename: 'index.html',
                chunks: ['index'],
                mobile: true
            }),
            new HtmlWebpackPlugin({
                title: 'About page.',
                filename: 'about.html',
                chunks: ['about'],
                mobile: true
            }),
        ],
    };

    if (argv.mode !== 'production') {
        config.mode = 'development';
        config.devtool = 'source-map';
    }

    return config;
};