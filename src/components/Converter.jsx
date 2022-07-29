import React, { useState } from "react";

function Converter({ counter }) {
  return (
    <div>
      {/* {삼항 연산자} */}
      {counter % 2 === 0 ? "짝수" : "홀수"}
    </div>
  );
}

export default Converter;
