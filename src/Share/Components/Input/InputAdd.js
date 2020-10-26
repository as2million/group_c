// height:40px   font-size:15px   方角輸入框
// cha
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./Input.scss";

function InputAdd() {
  const turnOrange = () => {
    const symbolAdd = document.querySelector(".iris-symbolAdd");
    symbolAdd.style.color = "#f5a016";
  };
  const turnGrey = () => {
    const symbolAdd = document.querySelector(".iris-symbolAdd");
    symbolAdd.style.color = "#858585";
  };

  return (
    <>
      <div class="iris-select-wrapper">
        <input
          class="form-control iris-InputAdd"
          type="text"
          placeholder="height:40px font-size:15px 方角"
        />
        <div
          class="iris-whitebox-add"
          onMouseEnter={() => {
            turnOrange();
          }}
          onMouseLeave={() => {
            turnGrey();
          }}
        ></div>
        <div class="iris-symbolAdd">+</div>
      </div>
    </>
  );
}

export default InputAdd;
