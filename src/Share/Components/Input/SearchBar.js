// height:50px   font-size:20px   圓角搜尋框
// ru
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./Input.scss";
import "./SearchBar.scss";
import searchIcon from "./../../image/search_icon.svg";

function SearchBar() {
  // function lightenBorder(e){
  //   document.querySelector("#search").style['background-color'] = '#f00';
  // }

  
  return (
    <>
      <div class="iris-input-field first-wrap">
        <div class="svg-wrapper">
          <img class="iris-img" src={searchIcon} />
        </div>
        <input class="iris-searchbar" id="search" type="text" placeholder="search" 
        // onClick={()=>{lightenBorder()}}
        />
      </div>
      {/* </div> */}
    </>
  );
}

export default SearchBar;
