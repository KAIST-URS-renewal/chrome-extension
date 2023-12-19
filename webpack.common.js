const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        background: {
            import: './background.js',
            filename: 'background.js',
        },
        content_script: {
            import: './content_script.js',
            filename: 'content_script.js',
        },
        popup: {
            import: './popup.js',
            filename: 'popup.js',
        },
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'popup.html', to: '' },
                { from: 'manifest.json', to: '' },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'swc-loader',
                    options: {
                        parseMap: true,
                    },
                },
            },
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src/'),
        },
    },
};
