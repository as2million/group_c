// 18px 方角輸入框

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./Input.scss";

function InputMd() {
  return (
    <>
      <input
        class="form-control iris-input-size-md"
        type="text"
        placeholder="18px 方角"
      />
    </>
  );
}

export default InputMd;
