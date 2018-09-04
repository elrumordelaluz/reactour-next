const HtmlWebPackPlugin = require('html-webpack-plugin')
const { join } = require('path')
const { execSync } = require('child_process')

module.exports = {
  entry: './src/demo/index',
  mode: 'development',
  output: {
    path: join(__dirname, 'docs'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: 'docs/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/demo/index.html',
      filename: './index.html',
    }),
  ],
}

const port = 8080

module.exports.serve = {
  port,
  on: {
    listening: () => {
      execSync('ps cax | grep "Google Chrome"')
      execSync(
        `osascript chrome.applescript "${encodeURI(
          `http://localhost:${port}`
        )}"`,
        {
          cwd: __dirname,
          stdio: 'ignore',
        }
      )
    },
  },
}
