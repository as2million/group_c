// height:50px   font-size:20px   圓角輸入框
// iris 會員註冊/登入
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./Input.scss";

function InputH44() {
  return (
    <>
      <input
        class="form-control iris-InputH44"
        type="text"
        placeholder="height:44px font-size:20px 圓角"
      />
    </>
  );
}

export default InputH44;
