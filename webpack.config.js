import webpack from 'webpack'

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["es2015", "react", "stage-2"],
            plugins: ['transform-runtime', 'babel-plugin-root-import']
          }
        }
      }
    ]
  }
};
