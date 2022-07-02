import React from "react";
import "./UniqNum.css";

function getRndInteger() {
  let n: number = Math.floor(Math.random() * (100000 - 9999)) + 9999;
  console.log(n);
}

function UniqNum() {
  return (
    <div id="UniqNum">
      <hr></hr>
      <br></br>
      <p>Enter "Click Me" to get unique 5 digit number in Console : </p>
      <button onClick={getRndInteger}> Click Me </button>
    </div>
  );
}

export default UniqNum;
