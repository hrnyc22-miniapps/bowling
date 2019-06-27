module.exports = {
  mode: "development",
  entry: __dirname + "/client/src/board.jsx",
  output: {
    path: __dirname + "/client/dist",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader"
      }
    ]
  }
};
