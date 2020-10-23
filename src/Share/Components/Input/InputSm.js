// 15px 方角輸入框

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./Input.scss";

function InputSm() {
  return (
    <>
      <input
        class="form-control iris-input-size-sm"
        type="text"
        placeholder="15px 方角"
      />
    </>
  );
}

export default InputSm;
