const path = require('path')
const nodeExternal = require('webpack-node-externals')

module.exports = {
  entry: path.join(__dirname, './src/index.ts'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          'ts-loader',
        ],
        exclude: [/node_modules/, /test/]
      }
    ]
  },
  externals: [nodeExternal()]
}