import path from 'path'; // path package comes with node

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
  plugins: [],
  module: {
    loaders: [ // file types webpack will handle
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}

