const path = require("path");

const filename = "ItemList.js";

module.exports = {
  entry: "./src/javascript/" + filename,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: filename,
  },
  mode: "development",
};
