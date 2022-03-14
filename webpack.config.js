const fs = require("fs");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  // entry: fs
  //   .readdirSync("./src")
  //   .filter((p) => p.trim().endsWith(".jsx"))
  //   .reduce(
  //     (p, n) => ({
  //       ...p,
  //       [path.basename(n, ".jsx")]: path.resolve('src', n),
  //     }),
  //     {}
  //   ),
  output: {
    // filename: "[name].js",
    library: {
      type: "commonjs2",
    },
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
