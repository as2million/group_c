// test

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./Input.scss";
import triangleArrow from "./../../image/triangleArrow.svg";

function SelectBoxTest(props) {


  return (
    <>
      <div class="iris-select-wrapper">
        <select
          class="form-control iris-select"
          id="exampleFormControlSelect1"
          onChange={(e) => {
            props.setInput(e.target.value);
          }}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <div class="iris-whitebox"></div>
        <img src={triangleArrow} alt="arrow" class="iris-triangle" />
      </div>
    </>
  );
}

export default SelectBoxTest;
