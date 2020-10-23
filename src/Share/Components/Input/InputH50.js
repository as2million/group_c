// height:50px   font-size:20px   圓角輸入框
// janice
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./Input.scss";

function InputH50() {
  return (
    <>
      <input
        class="form-control iris-inputH50"
        type="text"
        placeholder="height:50px font-size:20px 圓角"
      />
    </>
  );
}

export default InputH50;
