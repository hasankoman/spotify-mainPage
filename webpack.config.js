const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/",
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "./src/components"),
    },
  },
  devServer: {
    historyApiFallBack: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: "file-loader",
      },
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      options: {
        template: path.resolve(__dirname, "./public/index.html"),
        filename: "index.html",
      },
    }),
  ],
};
