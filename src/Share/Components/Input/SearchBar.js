// height:50px   font-size:20px   圓角搜尋框

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./Input.scss";
import "./main.css";
import searchIcon from "./../../image/search_icon.svg";

function SearchBar() {
  return (
    <>
      <div class="input-field first-wrap">
        <div class="svg-wrapper">
          <img src={searchIcon} />
        </div>
        <input id="search" type="text" placeholder="search" />
      </div>
      {/* </div> */}
    </>
  );
}

export default SearchBar;
