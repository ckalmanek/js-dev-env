import path from 'path'; // path package comes with node
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'inline-source-map', // higher quality settings take longer
  noInfo: false, 
  entry: [
    path.resolve(__dirname, 'src/index') // app entry point, no hot reloading
  ],
  target: 'web', // could set to node or electron
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js' // in dev mode, it creates in memory not a file
  },
  plugins: [
       // Create HTML file that includes reference to bundled JS
       new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: true
      })
  ],
  module: {
    loaders: [ // file types webpack will handle
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}

