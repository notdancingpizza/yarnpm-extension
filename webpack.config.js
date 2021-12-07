const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const ZipPlugin = require("zip-webpack-plugin");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  output: { path: path.resolve(__dirname, "dist") },
  plugins: [
    new ZipPlugin({
      path: ".",
      filename: `${uuidv4()}_chrome_extension`,
      extension: "zip",
    }),
    new CopyPlugin({
      patterns: [{ from: "src", to: "." }],
    }),
    new CleanWebpackPlugin({ verbose: true }),
  ],
};
