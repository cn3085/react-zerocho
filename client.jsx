const React = require("react");
const ReactDom = require("react-dom");
const { default: NumberBaseball } = require("./components/NumberBaseball");

const WordRelay = require("./components/WordRelay");
import ResponseCheck from "./components/ResponseCheck";
import RSP from "./components/RSP";
import Lotto from "./components/Lotto";

ReactDom.render(
  <>
    <WordRelay />
    <NumberBaseball />
    <ResponseCheck />
    <RSP />
    <Lotto />
  </>,
  document.querySelector("#root")
);
