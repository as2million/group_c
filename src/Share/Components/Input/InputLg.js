import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./Input.scss";
import searchIcon from "./../../image/search_icon.svg";

function InputLg() {
  return (
    <>
      <input
        class="form-control input-size-lg"
        type="text"
        placeholder="20px 圓角"
      />
      <img src={searchIcon} />

      <br />
      <div class="form-group has-feedback">
        <input type="text" class="form-control" placeholder="Username" />
        <i class="glyphicon glyphicon-user form-control-feedback"></i>
      </div>
    </>
  );
}

export default InputLg;
