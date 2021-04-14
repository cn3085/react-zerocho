const React = require("react");
const { Component } = React;

class WordRelay extends Component {
  state = {
    word: "리액트",
    value: "",
    result: "",
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.input.value[0]) {
      this.setState({
        word: this.state.value,
        value: "",
        result: "딩동댕",
      });
    } else {
      this.setState({
        value: "",
        result: "땡",
      });
    }
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  input;
  onRefInput = (c) => {
    this.input = c;
  };

  render() {
    return (
      <>
        <div>
          <div>{this.state.word}</div>
          <form onSubmit={this.onSubmitForm}>
            <input
              ref={this.onRefInput}
              value={this.state.value}
              onChange={this.onChangeInput}
            />
            <button>입력!</button>
          </form>
          <p>{this.state.result}</p>
        </div>
      </>
    );
  }
}

module.exports = WordRelay;
