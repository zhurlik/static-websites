const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        [
            'postcss-preset-env',
            {
                // Options
            },
        ],
        autoprefixer,
        tailwindcss
    ],
};
