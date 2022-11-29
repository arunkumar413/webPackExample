import "./styles.css";
import webpack from "webpack";
import { path } from "path";

import { fs } from 'memfs';

export default function App() {
  // https://webpack.js.org/api/node

  let compiler = webpack({
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename:'bundle.js'
    }
  });



  compiler.run(function (err, stats) {
    console.log(stats);

    if (err) {
      console.error(err.stack || err);
      if (err.details) {
        console.error(err.details);
      }
    }
    const info = stats.toJson();
    if (stats.hasErrors()) {
      console.error(info.errors);
    }
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
    </div>
  );
}
