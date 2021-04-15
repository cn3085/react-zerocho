import React, { memo } from "react";

const Try = ({ tryInfo }) => {
  console.log("render");
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
};

export default memo(Try);
