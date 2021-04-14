import React from "react";

class Try extends React.Component {
  render() {
    return (
      <li>
        <div>{this.props.tryInfo.try}</div>
        <div>{this.props.tryInfo.result}</div>
      </li>
    );
  }
}

export default Try;
