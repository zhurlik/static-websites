const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// import .env file
require('dotenv').config()

module.exports = (env, argv) => {
    const config = {
        context: path.resolve(__dirname, './src/desktop/entry'),
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
            path: path.resolve(__dirname, 'dist/desktop-site'),
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Index page.',
                filename: 'index.html',
                chunks: ['index'],
            }),
            new HtmlWebpackPlugin({
                title: 'About page.',
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