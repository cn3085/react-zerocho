import React, { Component } from "react";

const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
};

const scores = {
  바위: 0,
  가위: 1,
  보: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find((v) => v[1] === imgCoord)[0];
};
//클래스의 경우: constructor -> render -> ref 설정 -> componentDidMount(비동기 요청: ajax, setInterval...)
//               -> (setState/props) -> shouldComponentUpdate -> render -> componentDidUpdate ->
//               -> componentWillUnmount(비동기 요청 제거: clearInterval...) -> 소멸
class RSP extends Component {
  state = {
    result: "",
    imgCoord: "0",
    score: 0,
  };

  interval;
  timeout;

  componentDidMount() {
    //컴포넌트가 처음 렌더링 된 후
    this.interval = setInterval(this.changeHand, 1000);
  }

  componentDidUpdate() {
    //리렌더링 후
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    // 컴포넌트가 제거되기 직전
  }

  onClickBtn = (choice) => () => {
    const { imgCoord } = this.state;
    clearInterval(this.interval);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      this.setState({
        result: "비겼습니다.",
      });
    } else if ([-1, 2].includes(diff)) {
      this.setState((prevState) => {
        return {
          result: "이겼습니다!",
          score: prevState.score + 1,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          result: "졌습니다.",
          score: prevState.score - 1,
        };
      });
    }
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.interval = setInterval(this.changeHand, 1000);
    }, 2000);
  };

  changeHand = () => {
    const { imgCoord } = this.state;
    if (imgCoord === rspCoords.바위) {
      this.setState({
        imgCoord: rspCoords.가위,
      });
    } else if (imgCoord === rspCoords.가위) {
      this.setState({
        imgCoord: rspCoords.보,
      });
    } else if (imgCoord === rspCoords.보) {
      this.setState({
        imgCoord: rspCoords.바위,
      });
    }
  };

  render() {
    const { result, imgCoord, score } = this.state;
    return (
      <>
        <div
          id="computer"
          style={{
            width: "142px",
            height: "200px",
            background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
          }}
        ></div>
        <div>
          <button id="" className="" onClick={this.onClickBtn("바위")}>
            바위
          </button>
          <button id="" className="" onClick={this.onClickBtn("가위")}>
            가위
          </button>
          <button id="" className="" onClick={this.onClickBtn("보")}>
            보
          </button>
        </div>
        <div>{result}</div>
        <div>현재 {score} 점</div>
      </>
    );
  }
}

export default RSP;
