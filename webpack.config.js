
const MiniCssExtractPlugin =  require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename : 'main.js'
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ],
    module: {
        rules: [
            {   
                test: /\.js$/,
                /* exclude: /(node_modules|accordion-plugin|gallery-plugin|slider)/, */
                exclude: /(node_modules|(?!src\/(accordion-plugin|gallery-plugin|slider)\/).*)/,
                /* /(node_modules|(?!src\/(subfolder1|subfolder2)\/).*)/ */
                use: ['babel-loader']
            },
            {   
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader']
            }
        ]
    }
}