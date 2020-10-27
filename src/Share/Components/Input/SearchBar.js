// height:50px   font-size:20px   圓角搜尋框
// ru
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./Input.scss";
import "./SearchBar.scss";
import { ReactComponent as SearchIcon } from "./../../image/search_icon.svg";

function SearchBar() {
  function lightenBorder() {
    document.querySelector(".iris-input-field").style["box-shadow"] =
      "0 0 0.5rem #f5a016";
    document.querySelector(".iris-input-field").style["border-color"] = "#fff";
    document.querySelector(".iris-img").style.fill = "#F5CB87";
  }
  window.onclick = (e) => {
    if (e.target.id !== "iris-search") {
      document.querySelector(".iris-input-field").style["box-shadow"] = "none";
      document.querySelector(".iris-input-field").style["border-color"] =
        "#858585";
      document.querySelector(".iris-img").style.fill = "#c2c4ca";
    }

    // console.log(typeof(e.target))
    // document.querySelector(".iris-input-field").style["box-shadow"] = "0 0 0.5rem #faf";
    // document.querySelector(".iris-input-field").style["border-color"] = "#fff";
  };
  return (
    <>
      <div class="iris-input-field first-wrap">
        <div class="svg-wrapper">
          {/* <img class="iris-img" src={searchIcon} /> */}
          <SearchIcon class="iris-img"/>
        </div>
        <input
          class="iris-searchbar"
          id="iris-search"
          type="text"
          placeholder="search"
          onClick={() => {
            lightenBorder();
          }}
        />
      </div>
      {/* </div> */}
    </>
  );
}

export default SearchBar;
