import React, { useState, useRef, useEffect, memo } from "react";

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

const RSP = () => {
  const [result, setResult] = useState("");
  const [imgCoord, setImgCoord] = useState(rspCoords.바위);
  const [score, setScore] = useState(0);

  const interval = useRef();
  const timeout = useRef();

  useEffect(() => {
    //componentDidMount, componentDidUpdate 역할
    interval.current = setInterval(changeHand, 100);
    return () => {
      //componentWillUnmount 역할
      clearInterval(interval.current);
    };
  }, [imgCoord]); //바뀌고 싶은 값을 배열에 넣어준다. 여기 넣은 값들이 바뀔 때 useEffect가 실행된다. 바뀌고 싶은 값을 여기 안 넣어주면 최초 한번만 실행된다

  useEffect(() => {
    return () => {};
  }, [score]); //이런식으로 state마다 다른 effect가 필요할 때 이렇게 할 수 있음

  const onClickBtn = (choice) => () => {
    clearInterval(interval.current);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      setResult("비겼습니다.");
    } else if ([-1, 2].includes(diff)) {
      setResult("이겼습니다!");
      setScore((prevScore) => prevScore + 1);
    } else {
      setResult("졌습니다.");
      setScore((prevScore) => prevScore - 1);
    }
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      interval.current = setInterval(changeHand, 1000);
    }, 1000);
  };

  const changeHand = () => {
    if (imgCoord === rspCoords.바위) {
      setImgCoord(rspCoords.가위);
    } else if (imgCoord === rspCoords.가위) {
      setImgCoord(rspCoords.보);
    } else if (imgCoord === rspCoords.보) {
      setImgCoord(rspCoords.바위);
    }
  };

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
        <button id="" className="" onClick={onClickBtn("바위")}>
          바위
        </button>
        <button id="" className="" onClick={onClickBtn("가위")}>
          가위
        </button>
        <button id="" className="" onClick={onClickBtn("보")}>
          보
        </button>
      </div>
      <div>{result}</div>
      <div>현재 {score} 점</div>
    </>
  );
};

export default memo(RSP); //memo로 감싸줘야 부모자식간 불필요한 렌더링을 막을 수 있다
