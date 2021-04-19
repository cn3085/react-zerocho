const React = require("react");
const ReactDom = require("react-dom");
const { default: NumberBaseball } = require("./components/NumberBaseball");

const WordRelay = require("./components/WordRelay");
import ResponseCheck from "./components/ResponseCheck";

ReactDom.render(
  <>
    <WordRelay />
    <NumberBaseball />
    <ResponseCheck />
  </>,
  document.querySelector("#root")
);
