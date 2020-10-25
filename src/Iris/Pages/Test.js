import React, { useState, useEffect } from "react";
import InputTest from "./../../Share/Components/Input/InputTest";
function Test(props) {
  const [input, setInput] = useState("iris");
  const { setName } = props;
  return (
    <>
      <div className="container">
        <h1>會員登入登出</h1>
        <h1>姓名:</h1>
        <InputTest input={input} setInput={setInput} />
        <button onClick={() => setName(input)}>send</button>
      </div>
    </>
  );
}

export default Test;
