const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {  
    mode: 'development',  
    entry: './src/index.js',  
    output: {  
      filename: 'bundle.js',  
      clean: true
    } ,
    plugins : [
      new HtmlWebpackPlugin({
        title: "To-Do App"
      })
    ],
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.js$/, 
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          type: 'asset/resource'
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        },
      ]
    }
  };