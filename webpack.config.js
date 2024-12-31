import path from "path";

export default {
  entry: {
    bundle: "./src/index.ts",
  },
  output: {
    path: path.join(process.cwd(), "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    static: {
      directory: path.join(process.cwd(), "dist"), // contentBase の代わり
    },
    open: true,
  },
  module: {
    rules: [
      {
        loader: "ts-loader",
        test: /\.ts$/,
      },
    ],
  },
};
