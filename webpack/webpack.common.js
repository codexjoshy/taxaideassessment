const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
/**
 * Instructions for configurations
 * these instructions will help to make traspiling of the js files possible with babel and webpack.
 * @entry tells the origin of all js files to be traspiled.
 * @output specifies the path to which the transpiled code would be stored while also providing the filename.
 * @plugins is a list of plugins that will be installed build process.
 * @module determines how the different types of modules in the project would be treated the
 */
module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  },
  output: {
    path: path.join(__dirname, '/../dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
    }),
    // new CopyWebpackPlugin({
    //   patterns: [{ to: '', from: '' }],
    // }),
  ],
  module: {
    rules: [
      {
        // test: /\.jsx?$/,
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
}
