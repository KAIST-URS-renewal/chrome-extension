const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        background: {
            import:  './background.js',
            filename: 'background.js'
        },
        content_script: {
            import: './content_script.js',
            filename: 'content_script.js'
        },
        popup: {
            import: './popup.js',
            filename: 'popup.js'
        }
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {from: 'popup.html', to: ''},
                {from: 'manifest.json', to: ''},
            ]
        })
    ]
}