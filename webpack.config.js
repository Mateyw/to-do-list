const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/tabs/index/index.js',
    projects: './src/tabs/project/projectsTab.js',
    todos: './src/tabs/toDo/toDosTab.js',
    categories: './src/tabs/category/categoriesTab.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devtool: 'source-map', // Use 'source-map' for production or 'eval-source-map' for development

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.hbs$/,
        use: [
          'handlebars-loader'
        ]
      },
    ]
  },
  // devServer: {
  //   contentBase: path.join(__dirname, 'dist'),
  //   compress: true,
  //   port: 9000,
  //   watchContentBase: true,
  //   hot: true,
  // },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index'],
      title: 'To-do',
      template: 'src/tabs/index/index-template.hbs',
      minify: false
    }),
    new HtmlWebpackPlugin({
      filename: 'projects.html',
      chunks: ['projects'],
      title: 'Projects',
      template: 'src/tabs/project/project-template.hbs',
      minify: false
    }),
    new HtmlWebpackPlugin({
      filename: 'toDos.html',
      chunks: ['todos'],
      title: `To-Do's`,
      template: 'src//tabs/toDo/toDo-template.hbs',
      minify: false
    }),
    new HtmlWebpackPlugin({
      filename: 'categories.html',
      chunks: ['categories'],
      title: 'Categories',
      template: 'src/tabs/category/category-template.hbs',
      minify: false
    }),
  ]
};