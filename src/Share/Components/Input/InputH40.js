// height:40px   font-size:15px   方角輸入框
// cha, iris
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./Input.scss";

function InputH40() {
  return (
    <>
      <input
        class="form-control iris-InputH40"
        type="text"
        placeholder="height:40px font-size:15px 方角"
      />
    </>
  );
}

export default InputH40;
