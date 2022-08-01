import React, { useState, useEffect } from "react";

function Counter({ counter, setCounter }) {
  const [searchWord, setSearchWord] = useState("");
  const addCounter = () => {
    setCounter(counter + 1);
  };
  const onChange = (e) => {
    setSearchWord(e.target.value);
  };

  useEffect(() => {
    console.log("API 호출");
  }, []);

  useEffect(() => {
    console.log("change input");
  }, [searchWord]);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <div>
      <input
        type="text"
        placeholder="검색어"
        onChange={onChange}
        value={searchWord}
      />
      <div>{counter}번 클릭했습니다.</div>
      <button onClick={addCounter}>+</button>
    </div>
  );
}
export default Counter;
