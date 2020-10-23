// ------test-----  //

import React, { useState, useEffect } from "react";
import TempNavbar from "./Components/temp-navbar/TempNavbar";
import InputH50 from "./../Share/Components/Input/InputH50";
import InputH44 from "./../Share/Components/Input/InputH44";
import InputH40 from "./../Share/Components/Input/InputH40";
import TextArea from "./../Share/Components/Input/TextArea";
import "./IrisApp.scss";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SearchBar from "../Share/Components/Input/SearchBar";

function IrisApp() {
  return (
    <Router>
      <>
        <TempNavbar />
        <div className="container">
          <SearchBar />
          <br />
          <InputH50 />
          <br />
          <InputH44 />
          <br />
          <InputH40 />
          <br />
          <TextArea />

          <br />
        </div>
      </>
    </Router>
  );
}

export default IrisApp;
