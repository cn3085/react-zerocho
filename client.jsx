const React = require("react");
const ReactDom = require("react-dom");
const { default: NumberBaseball } = require("./components/NumberBaseball");

const WordRelay = require("./components/WordRelay");

ReactDom.render(
  <>
    <WordRelay />
    <NumberBaseball />
  </>,
  document.querySelector("#root")
);
