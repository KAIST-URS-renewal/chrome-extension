const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
    },
    watch: true,
});
