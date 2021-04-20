const React = require("react");
const ReactDom = require("react-dom");
const { default: NumberBaseball } = require("./components/NumberBaseball");

const WordRelay = require("./components/WordRelay");
import ResponseCheck from "./components/ResponseCheck";
import RSP from "./components/RSP";

ReactDom.render(
  <>
    <WordRelay />
    <NumberBaseball />
    <ResponseCheck />
    <RSP />
  </>,
  document.querySelector("#root")
);
