import React, { useState } from "react";

function Counter({ counter, setCounter }) {
  const addCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <div>{counter}번 클릭했습니다.</div>
      <button onClick={addCounter}>+</button>
    </div>
  );
}
export default Counter;
